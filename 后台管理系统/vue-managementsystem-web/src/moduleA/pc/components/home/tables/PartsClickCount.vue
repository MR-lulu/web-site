<template>
  <div class="partsClickCount">
    <div class="top">
      <!--零件点击量统计表-->
      <div class="table-name"><span>{{$t('rs.moduleA.20000000151')}}</span></div>
    </div>
    <!--表格内容-->
    <div class="user-table">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        height="500"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
        :default-sort="{prop: 'serverCreateTime', order: 'descending'}">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="partsId" width="100" :label="$t('rs.moduleA.20000000021')  /*编号*/" sortable
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="name" :label="$t('rs.moduleA.20000000057')  /*名称*/"
                         :show-overflow-tooltip="true"></el-table-column>

        <el-table-column prop="status" :label="$t('rs.moduleA.20000000058') /*状态*/" :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <!--正常-->
            <span v-if="scope.row.status==1">{{ $t('rs.moduleA.20000000059') }}</span>
            <!--废弃-->
            <span v-if="scope.row.status==2">{{ $t('rs.moduleA.20000000060') }}</span>
          </template>
        </el-table-column>


        <el-table-column prop="belongModule" :label="$t('rs.moduleA.20000000152')  /*所属模块*/" sortable
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="belongNavigation" :label="$t('rs.moduleA.20000000153')  /*所属导航*/" sortable
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="belongPartsType" :label="$t('rs.moduleA.20000000154')  /*所属种类*/" sortable
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="click" :label="$t('rs.moduleA.20000000155')  /*点击量*/" sortable
                         :show-overflow-tooltip="true"></el-table-column>

        <el-table-column prop="serverCreateTime" :label="$t('rs.moduleA.20000000027') /*创建时间*/" sortable
                         :show-overflow-tooltip="true" :formatter="dateFormat"></el-table-column>
        <!--<el-table-column prop="" width="100" :label="$t('rs.moduleA.20000000028') /*操作*/">-->
          <!--<template slot-scope="scope">-->
          <!--<i class="el-icon-edit"></i>-->
          <!--</template>-->
        <!--</el-table-column>-->
      </el-table>
    </div>
    <!--分页-->
    <div class="page">
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :current-page="page"
        :page-sizes="[5, 10, 20, 50, 100, 1000]"
        :page-size="rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import PartsInfoRequestVO from '@/moduleA/common/js/model/PartsInfoRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import PartsTypeListRequestVO from '@/moduleA/common/js/model/PartsTypeListRequestVO.js'
  import ModulesListRequestVO from '@/moduleA/common/js/model/ModulesListRequestVO.js'
  import NavigationListRequestVO from '@/moduleA/common/js/model/NavigationListRequestVO.js'
  import Config from '../../../../../assets/Config.js'

  export default {
    name: "PartsClickCount",
    data() {
      return {
        partsChartTimer: '',  // 定时器
        partsTypeMap: {},  // 零件类型
        modulesMap: {},  // 模块
        navigationMap: {},  // 导航
        modulesToNavigationMap: [],  // 模块-导航
        tableData: [],
        total: 0,  // 总的条数
        page: 0,  // 当前页
        rows: 0,  // 每页大小
        multipleSelection: []
      }
    },
    created() {
      // 获取零件类型
      this.getPartsTypeList();
      // 获取模块信息
      this.getModules();
      // 获取导航
      this.getNavigation();

      // 延迟获取数据
      setTimeout(() => {
        // 进入先请求一次数据
        this.getPartsListOne();
        // 定时获取零件信息
        this.getPartsList();
      }, 3000);
    },

    // 离开页面时，销毁定时器
    beforeDestroy() {
      // 页面跳转,销毁定时器
      clearInterval(this.partsChartTimer);
    },

    methods: {
      //时间格式化
      dateFormat: function (row, column, cellValue, index) {
        return Tools.formatDate(new Date(cellValue), 'yyyy-MM-dd HH:mm:ss');
      },
      // 表格动态新增样式class
      tableRowClassName({row, rowIndex}) {
        if (rowIndex % 2 === 1) {
          return 'warning-row';
        }
        return '';
      },
      handleSizeChange(val) {
        this.rows = val;
        this.getPartsListOne();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        this.getPartsListOne();
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getPartsListOne();
      },

      // 进入获取一次零件信息
      getPartsListOne: function () {
        let partsInfoRequestVO = new PartsInfoRequestVO(this.ProtocolContent.partsInfo);
        partsInfoRequestVO.page = this.page;
        partsInfoRequestVO.rows = this.rows;
        this.communicateManger.httpCommunicate.getResponseVO(partsInfoRequestVO, "/parts/query/page").then((PartsInfoResponseVO) => {
          if (PartsInfoResponseVO.getStatus == 1000) {
            this.tableData = PartsInfoResponseVO.resultList;
            for (let i = 0; i < this.tableData.length; i++) {
              // 获取所属模块
              this.tableData[i].belongModule = this.modulesMap.get(this.tableData[i].modulesId);
              // 获取所属导航
              this.tableData[i].belongNavigation = this.navigationMap.get(this.modulesToNavigationMap.get(this.tableData[i].modulesId));
              // 获取所属种类
              this.tableData[i].belongPartsType = this.partsTypeMap.get(this.tableData[i].partsTypeId);
            }
            this.total = PartsInfoResponseVO.getTotal;
            this.page = PartsInfoResponseVO.getPage;
            this.rows = PartsInfoResponseVO.getRows;
          } else {
            this.messageBox.error(PartsInfoResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 定时获取零件信息
      getPartsList: function () {
        // 先清除定时器
        clearInterval(this.partsChartTimer);
        //定时器
        this.partsChartTimer = setInterval(() => {
          let partsInfoRequestVO = new PartsInfoRequestVO(this.ProtocolContent.partsInfo);
          partsInfoRequestVO.page = this.page;
          partsInfoRequestVO.rows = this.rows;
          this.communicateManger.httpCommunicate.getResponseVO(partsInfoRequestVO, "/parts/query/page").then((PartsInfoResponseVO) => {
            if (PartsInfoResponseVO.getStatus == 1000) {
              this.tableData = PartsInfoResponseVO.resultList;
              for (let i = 0; i < this.tableData.length; i++) {
                // 获取所属模块
                this.tableData[i].belongModule = this.modulesMap.get(this.tableData[i].modulesId);
                // 获取所属导航
                this.tableData[i].belongNavigation = this.navigationMap.get(this.modulesToNavigationMap.get(this.tableData[i].modulesId));
                // 获取所属模块
                this.tableData[i].belongPartsType = this.partsTypeMap.get(this.tableData[i].partsTypeId);
              }
              this.total = PartsInfoResponseVO.getTotal;
              this.page = PartsInfoResponseVO.getPage;
              this.rows = PartsInfoResponseVO.getRows;
            } else {
              this.messageBox.error(PartsInfoResponseVO.getMsg);
            }
          }).catch(() => {
            this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
          })
        }, Config.partsClickTimer)
      },

      // 获取零件类型Map
      getPartsTypeList: function () {
        let partsTypeListRequestVO = new PartsTypeListRequestVO(this.ProtocolContent.partsTypeList);
        this.communicateManger.httpCommunicate.getResponseVO(partsTypeListRequestVO, "/partsType/query/list").then((PartsTypeListResponseVO) => {
          if (PartsTypeListResponseVO.getStatus == 1000) {
            this.partsTypeMap = new Map();
            for (let i = 0; i < PartsTypeListResponseVO.resultList.length; i++) {
              this.partsTypeMap.set(PartsTypeListResponseVO.resultList[i].partsTypeId, PartsTypeListResponseVO.resultList[i].name);
            }
          } else {
            this.messageBox.error(PartsTypeListResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 获取模块Map
      getModules: function () {
        let modulesListRequestVO = new ModulesListRequestVO(this.ProtocolContent.modulesList);
        this.communicateManger.httpCommunicate.getResponseVO(modulesListRequestVO, "/modules/query/list").then((ModulesListResponseVO) => {
          if (ModulesListResponseVO.getStatus == 1000) {
            this.modulesMap = new Map();
            this.modulesToNavigationMap = new Map();
            for (let i = 0; i < ModulesListResponseVO.resultList.length; i++) {
              this.modulesMap.set(ModulesListResponseVO.resultList[i].modulesId, ModulesListResponseVO.resultList[i].name);
              this.modulesToNavigationMap.set(ModulesListResponseVO.resultList[i].modulesId, ModulesListResponseVO.resultList[i].navigationId);
            }
          } else {
            this.messageBox.error(ModulesListResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 获取导航
      getNavigation: function () {
        let navigationListRequestVO = new NavigationListRequestVO(this.ProtocolContent.navigationList);
        this.communicateManger.httpCommunicate.getResponseVO(navigationListRequestVO, "/navigation/query/list").then((NavigationListResponseVO) => {
          if (NavigationListResponseVO.getStatus == 1000) {
            this.navigationMap = new Map();
            for (let i = 0; i < NavigationListResponseVO.resultList.length; i++) {
              this.navigationMap.set(NavigationListResponseVO.resultList[i].navigationId, NavigationListResponseVO.resultList[i].name);
            }
          } else {
            this.messageBox.error(NavigationListResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      }

    },
  }
</script>

<style>
  .partsClickCount {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #F0FFF0;
  }

  .partsClickCount .user-table {
    border-top: 1px solid #ebeef5;
    margin-top: 50px;
  }

  .partsClickCount .top {
  }

  .partsClickCount .table-name {
    width: 100%;
    height: 50px;
    float: left;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }

  .partsClickCount .el-table .warning-row {
    background: oldlace;
  }

  .partsClickCount .el-table th > .cell {
    text-align: center;
  }
</style>
