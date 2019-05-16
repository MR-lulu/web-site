<template>
  <div class="userRegistration">
    <!--表名称和删除按钮-->
    <div class="top">
      <!--删除按钮-->
      <div class="delete-btn">
        <!--删除-->
        <el-button type="danger" v-on:click="deleteList">{{$t('rs.moduleA.20000000019')}}</el-button>
      </div>
      <!--表名称-->
      <!--用户信息登记表-->
      <div class="table-name"><span>{{$t('rs.moduleA.20000000020')}}</span></div>
    </div>
    <!--表格内容-->
    <div class="user-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="500"
        :row-class-name="tableRowClassName"
        @selection-change="handleSelectionChange"
        :default-sort="{prop: 'serverCreateTime', order: 'descending'}">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="registersInfoId" width="100" :label="$t('rs.moduleA.20000000021')  /*编号*/" sortable
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="name" :label="$t('rs.moduleA.20000000022') /*客户名称*/"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="contact" :label="$t('rs.moduleA.20000000023') /*联系方式*/"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="address" :label="$t('rs.moduleA.20000000024') /*联系地址*/"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="phone" :label="$t('rs.moduleA.20000000025') /*联系电话*/"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="leaveMsg" :label="$t('rs.moduleA.20000000026') /*留言信息*/"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="serverCreateTime" :label="$t('rs.moduleA.20000000027') /*创建时间*/" sortable
                         :show-overflow-tooltip="true" :formatter="dateFormat"></el-table-column>
        <el-table-column prop="" width="100" :label="$t('rs.moduleA.20000000028') /*操作*/">
          <template slot-scope="scope">
            <i class="el-icon-delete" v-on:click="deleteOne(scope.$index, scope.row)"></i>
          </template>
        </el-table-column>
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
  import RegistersInfoRequestVO from '@/moduleA/common/js/model/RegistersInfoRequestVO.js'
  import RegistersInfoDeleteListRequestVO from '@/moduleA/common/js/model/RegistersInfoDeleteListRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "UserRegistration",
    data() {
      return {
        tableData: [],
        total: 0,  // 总的条数
        page: 0,  // 当前页
        rows: 0,  // 每页大小
        multipleSelection: [],
        ids: []
      }
    },

    created() {
      // 初始化表格数据
      this.getRegistersInfo();
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
        this.getRegistersInfo();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getRegistersInfo();
      },

      // 获取用户登记信息
      getRegistersInfo: function () {
        let registersInfoRequestVO = new RegistersInfoRequestVO(this.ProtocolContent.registersInfo);
        registersInfoRequestVO.page = this.page;
        registersInfoRequestVO.rows = this.rows;
        this.communicateManger.httpCommunicate.getResponseVO(registersInfoRequestVO, "/registersInfo/query/page").then((RegistersInfoResponseVO) => {
          if (RegistersInfoResponseVO.getStatus == 1000) {
            this.tableData = RegistersInfoResponseVO.resultList;
            this.total = RegistersInfoResponseVO.getTotal;
            this.page = RegistersInfoResponseVO.getPage;
            this.rows = RegistersInfoResponseVO.getRows;
          } else {
            this.messageBox.error(RegistersInfoResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 批量删除
      deleteList: function () {
        this.messageBox.confirm(this.$t('rs.staticText.30000000010'), this.$t('rs.staticText.30000000008'), () => {
        }, () => {
          // 确定
          this.ids = new Array();
          for (let item of this.multipleSelection) {
            this.ids.push(item.registersInfoId);
          }
          this.delete();
        }, () => {
          // 取消
        });
      },

      // 单个删除
      deleteOne: function (index, row) {
        this.messageBox.confirm(this.$t('rs.staticText.30000000010'), this.$t('rs.staticText.30000000008'), () => {
        }, () => {
          // 确定
          this.ids = new Array();
          this.ids.push(row.registersInfoId);
          this.delete();
        }, () => {
          // 取消
        });
      },

      // 删除用户信息
      delete: function () {
        let registersInfoDeleteListRequestVO = new RegistersInfoDeleteListRequestVO(this.ProtocolContent.registersInfoDelete);
        registersInfoDeleteListRequestVO.ids = this.ids;
        let _that = this;
        this.communicateManger.httpCommunicate.getResponseVO(registersInfoDeleteListRequestVO, "/registersInfo/delete/list").then((RegistersInfoDeleteListResponseVO) => {
          if (RegistersInfoDeleteListResponseVO.getStatus == 1000 && RegistersInfoDeleteListResponseVO.getResultCode >= 0) {
            this.messageBox.success(RegistersInfoDeleteListResponseVO.getMsg);
            // 重新获取数据
            _that.getRegistersInfo();
          } else {
            this.messageBox.error(RegistersInfoDeleteListResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },
  }
</script>

<style>
  .userRegistration {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #F0FFF0;
  }

  .userRegistration .user-table {
    border-top: 1px solid #ebeef5;
    margin-top: 50px;
  }

  .userRegistration .top {
  }

  .userRegistration .delete-btn {
    float: left;
    height: 50px;
    width: 20%;
    text-align: left;
    padding-left: 4%;
    padding-top: 7px;
  }

  .userRegistration .table-name {
    width: 80%;
    height: 50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 18px;
    padding-left: 25%;
  }

  .userRegistration .el-table .warning-row {
    background: oldlace;
  }

  .userRegistration .el-table th > .cell {
    text-align: center;
  }
</style>
