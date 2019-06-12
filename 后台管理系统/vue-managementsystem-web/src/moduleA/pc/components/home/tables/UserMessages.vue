<template>
  <div class="userMessages">
    <!--表名称和删除按钮-->
    <div class="top">
      <!--删除按钮-->
      <div class="delete-btn">
        <el-button type="danger" v-on:click="deleteList">{{$t('rs.moduleA.20000000019')}}</el-button>
      </div>
      <!--废弃按钮-->
      <div class="delete-btn">
        <el-button type="warning" v-on:click="updateList">{{$t('rs.moduleA.20000000060')}}</el-button>
      </div>
      <!--表名称:用户留言表-->
      <div class="table-name"><span>{{$t('rs.moduleA.20000000029')}}</span></div>
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
        <el-table-column width="100" prop="leaveMsgId" :label="$t('rs.moduleA.20000000021')  /*编号*/" sortable
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="userIp" :label="$t('rs.moduleA.20000000030')  /*用户*/"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="msgContent" :label="$t('rs.moduleA.20000000026') /*留言信息*/"
                         :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="serverCreateTime" :label="$t('rs.moduleA.20000000027') /*创建时间*/" sortable
                         :show-overflow-tooltip="true" :formatter="dateFormat"></el-table-column>
        <el-table-column prop="" width="200" :label="$t('rs.moduleA.20000000028') /*操作*/">
          <template slot-scope="scope">
            <i class="el-icon-delete" v-on:click="deleteOne(scope.$index, scope.row)"></i>
            <i class="el-icon-view" v-on:click="updateOne(scope.$index, scope.row)"></i>
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
  import LeaveMsgRequestVO from '@/moduleA/common/js/model/LeaveMsgRequestVO.js'
  import LeaveMsgDeleteListRequestVO from '@/moduleA/common/js/model/LeaveMsgDeleteListRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'

  export default {
    name: "UserMessages",
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
      this.getLeaveMsgInfo();
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
        this.getLeaveMsgInfo();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getLeaveMsgInfo();
      },

      // 获取留言信息
      getLeaveMsgInfo: function () {
        let leaveMsgRequestVO = new LeaveMsgRequestVO(this.ProtocolContent.leaveMsg);
        leaveMsgRequestVO.page = this.page;
        leaveMsgRequestVO.rows = this.rows;
        this.communicateManger.httpCommunicate.getResponseVO(leaveMsgRequestVO, "/leaveMsg/query/page").then((LeaveMsgResponseVO) => {
          if (LeaveMsgResponseVO.getStatus == 1000) {
            this.tableData = LeaveMsgResponseVO.resultList;
            this.total = LeaveMsgResponseVO.getTotal;
            this.page = LeaveMsgResponseVO.getPage;
            this.rows = LeaveMsgResponseVO.getRows;
          } else {
            this.messageBox.error(LeaveMsgResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 批量删除
      deleteList: function () {
        this.ids = new Array();
        for (let item of this.multipleSelection) {
          this.ids.push(item.leaveMsgId);
        }
        if (Tools.isNull(this.ids)) {
          return;
        }
        this.messageBox.confirm(this.$t('rs.staticText.30000000010'), this.$t('rs.staticText.30000000008'), () => {
        }, () => {
          // 确定
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
          this.ids.push(row.leaveMsgId);
          this.delete();
        }, () => {
          // 取消
        });
      },

      // 批量删除
      deleteList: function () {
        this.ids = new Array();
        for (let item of this.multipleSelection) {
          this.ids.push(item.leaveMsgId);
        }
        if (Tools.isNull(this.ids)) {
          return;
        }
        this.messageBox.confirm(this.$t('rs.staticText.30000000010'), this.$t('rs.staticText.30000000008'), () => {
        }, () => {
          // 确定
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
          this.ids.push(row.leaveMsgId);
          this.delete();
        }, () => {
          // 取消
        });
      },

      // 删除用户信息
      delete: function () {
        let leaveMsgDeleteListRequestVO = new LeaveMsgDeleteListRequestVO(this.ProtocolContent.leaveMsgDelete);
        leaveMsgDeleteListRequestVO.ids = this.ids;
        let _that = this;
        this.communicateManger.httpCommunicate.getResponseVO(leaveMsgDeleteListRequestVO, "/leaveMsg/delete/list").then((LeaveMsgDeleteListResponseVO) => {
          if (LeaveMsgDeleteListResponseVO.getStatus == 1000 && LeaveMsgDeleteListResponseVO.getResultCode > 0) {
            this.messageBox.success(LeaveMsgDeleteListResponseVO.getMsg);
            // 重新获取数据
            _that.getLeaveMsgInfo();
          } else {
            this.messageBox.error(LeaveMsgDeleteListResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 更新留言状态
      updateStatus: function () {

      }
    },
  }
</script>

<style>
  .userMessages {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #F0FFF0;
  }

  .userMessages .user-table {
    border-top: 1px solid #ebeef5;
    margin-top: 50px;
  }

  .userMessages .top {
  }

  .userMessages .delete-btn {
    float: left;
    height: 50px;
    width: 20%;
    text-align: left;
    padding-left: 4%;
    padding-top: 7px;
  }

  .userMessages .table-name {
    width: 80%;
    height: 50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 18px;
    padding-left: 25%;
  }

  .userMessages .el-table .warning-row {
    background: oldlace;
  }

  .userMessages .el-table th > .cell {
    text-align: center;
  }

  .userMessages .el-table .cell i {
    width: 40%;
  }
</style>
