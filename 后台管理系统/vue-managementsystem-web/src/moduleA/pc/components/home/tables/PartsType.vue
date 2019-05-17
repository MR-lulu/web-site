<template>
  <div class="parts-display">
    <div class="top">
      <!--零件种类表-->
      <div class="table-name"><span>{{$t('rs.moduleA.20000000056')}}</span></div>
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
        <el-table-column prop="partsTypeId" width="100" :label="$t('rs.moduleA.20000000021')  /*编号*/" sortable
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
        <el-table-column prop="serverCreateTime" :label="$t('rs.moduleA.20000000027') /*创建时间*/" sortable
                         :show-overflow-tooltip="true" :formatter="dateFormat"></el-table-column>
        <el-table-column prop="" width="100" :label="$t('rs.moduleA.20000000028') /*操作*/">
          <template slot-scope="scope">
            <i class="el-icon-edit"></i>
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
  import PartsTypeRequestVO from '@/moduleA/common/js/model/PartsTypeRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "PartsType",
    data() {
      return {
        tableData: [],
        total: 0,  // 总的条数
        page: 0,  // 当前页
        rows: 0,  // 每页大小
        multipleSelection: []
      }
    },
    created() {
      // 初始化表格数据
      this.getPartsTypeInfo();
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
        this.getPartsTypeInfo();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getPartsTypeInfo();
      },

      // 获取零件种类信息
      getPartsTypeInfo: function () {
        let partsTypeRequestVO = new PartsTypeRequestVO(this.ProtocolContent.partsType);
        partsTypeRequestVO.page = this.page;
        partsTypeRequestVO.rows = this.rows;
        this.communicateManger.httpCommunicate.getResponseVO(partsTypeRequestVO, "/partsType/query/page").then((PartsTypeResponseVO) => {
          if (PartsTypeResponseVO.getStatus == 1000) {
            this.tableData = PartsTypeResponseVO.resultList;
            this.total = PartsTypeResponseVO.getTotal;
            this.page = PartsTypeResponseVO.getPage;
            this.rows = PartsTypeResponseVO.getRows;
          } else {
            this.messageBox.error(PartsTypeResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },
  }
</script>

<style>
  .parts-display {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #F0FFF0;
  }

  .parts-display .user-table {
    border-top: 1px solid #ebeef5;
    margin-top: 50px;
  }

  .parts-display .top {
  }

  .parts-display .table-name {
    width: 100%;
    height: 50px;
    float: left;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }

  .parts-display .el-table .warning-row {
    background: oldlace;
  }

  .parts-display .el-table th > .cell {
    text-align: center;
  }
</style>
