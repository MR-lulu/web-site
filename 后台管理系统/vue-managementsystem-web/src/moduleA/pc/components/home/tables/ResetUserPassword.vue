<template>
  <div class="resetUserPassword">
    <!--表名称和重置密码按钮-->
    <div class="top">
      <!--重置密码按钮-->
      <div class="reset-btn">
        <!--重置密码-->
        <el-button type="danger" v-on:click="resetUserPasswordList">{{$t('rs.moduleA.20000000046')}}</el-button>
      </div>
      <!--表名称-->
      <!--管理员信息表-->
      <div class="table-name"><span>{{$t('rs.moduleA.20000000051')}}</span></div>
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
        <el-table-column prop="userId" width="100" :label="$t('rs.moduleA.20000000021')  /*编号*/" sortable :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="username" :label="$t('rs.moduleA.20000000012')  /*账号*/" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="phone" :label="$t('rs.moduleA.20000000047') /*手机号*/" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="mail" :label="$t('rs.moduleA.20000000048') /*邮箱*/" :show-overflow-tooltip="true"></el-table-column>
        <el-table-column prop="level" :label="$t('rs.moduleA.20000000049') /*类型*/" sortable :show-overflow-tooltip="true">
          <template slot-scope="scope">
            <span v-if="scope.row.level==1">{{ $t('rs.moduleA.20000000052') }}</span>
            <span v-if="scope.row.level==2">{{ $t('rs.moduleA.20000000053') }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="serverCreateTime" :label="$t('rs.moduleA.20000000027') /*创建时间*/" sortable
                         :show-overflow-tooltip="true" :formatter="dateFormat"></el-table-column>
        <el-table-column prop="serverUpdateTime" :label="$t('rs.moduleA.20000000050') /*修改时间*/" sortable
                         :show-overflow-tooltip="true" :formatter="dateFormat"></el-table-column>
        <el-table-column prop="" width="100" :label="$t('rs.moduleA.20000000028') /*操作*/">
          <template slot-scope="scope">
            <i class="el-icon-edit" v-on:click="resetUserPasswordOne(scope.$index, scope.row)"></i>
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
  import UserInfoListRequestVO from '@/moduleA/common/js/model/UserInfoListRequestVO.js'
  import ResetUserPasswordRequestVO from '@/moduleA/common/js/model/ResetUserPasswordRequestVO.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import md5 from 'js-md5';

  export default {
    name: "ResetUserPassword",
    data() {
      return {
        tableData: [],
        total: 0,  // 总的条数
        page: 0,  // 当前页
        rows: 0,  // 每页大小
        multipleSelection: [],
        subUserList: [],
        // 默认重置目标密码
        newPassword: '111111',
      }
    },
    created() {
      // 初始化表格数据
      this.getUserInfo();
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
        this.getUserInfo();
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleCurrentChange(val) {
        this.page = val;
        this.getUserInfo();
      },

      // 获取留言信息
      getUserInfo: function () {
        let userInfoListRequestVO = new UserInfoListRequestVO(this.ProtocolContent.userInfoList);
        userInfoListRequestVO.page = this.page;
        userInfoListRequestVO.rows = this.rows;
        this.communicateManger.httpCommunicate.getResponseVO(userInfoListRequestVO, "/user/query/page").then((UserInfoListResponseVO) => {
          if (UserInfoListResponseVO.getStatus == 1000) {
            this.tableData = UserInfoListResponseVO.resultList;
            this.total = UserInfoListResponseVO.getTotal;
            this.page = UserInfoListResponseVO.getPage;
            this.rows = UserInfoListResponseVO.getRows;
          } else {
            this.messageBox.error(UserInfoListResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 批量重置密码
      resetUserPasswordList: function () {
        this.subUserList = new Array();
        for (let item of this.multipleSelection) {
          let resetObject = {
            id: '',
            password: ''
          };
          resetObject.id = item.userId;
          resetObject.password = this.newPassword;
          this.subUserList.push(resetObject);
        }
        this.getNewPassword();
      },

      // 单个重置
      resetUserPasswordOne: function (index, row) {
        this.subUserList = new Array();
        let resetObject = {
          id: '',
          password: ''
        };
        resetObject.id = row.userId;
        resetObject.password = this.newPassword;
        this.subUserList.push(resetObject);
        this.getNewPassword();
      },

      // 获取新密码
      getNewPassword: function () {
        this.$prompt(this.$t('rs.staticText.30000000018'), this.$t('rs.staticText.30000000008'), {
          confirmButtonText: this.$t('rs.staticText.30000000004'),
          cancelButtonText: this.$t('rs.staticText.30000000005'),
          inputPattern: /^$|^(\w){6,20}$/,
          inputErrorMessage: this.$t('rs.staticText.30000000017'),
          inputPlaceholder: this.$t('rs.staticText.30000000025')
        }).then(({value}) => {
          // 如果输入为空，则使用默认的密码重置，否则使用输入的
          if (Tools.isNull(value)) {
            for (let item of this.subUserList) {
              item.password = md5.hex(item.password);
            }
          } else {
            for (let item of this.subUserList) {
              item.password = md5.hex(value);
            }
          }
          this.messageBox.confirm(this.$t('rs.staticText.30000000024'), this.$t('rs.staticText.30000000008'), () => {
          }, () => {
            // 确定
            this.resetPassword();
          }, () => {
            // 取消
          });
        }).catch(() => {
        });
      },

      // 重置用户密码
      resetPassword: function () {
        let resetUserPasswordRequestVO = new ResetUserPasswordRequestVO(this.ProtocolContent.resetUserPassword);
        resetUserPasswordRequestVO.subUserList = this.subUserList;
        this.communicateManger.httpCommunicate.getResponseVO(resetUserPasswordRequestVO, "/user/modifyList").then((ResetUserPasswordResponseVO) => {
          if (ResetUserPasswordResponseVO.getStatus == 1000 && ResetUserPasswordResponseVO.getResultCode > 0) {
            this.messageBox.success(ResetUserPasswordResponseVO.getMsg);
          } else {
            this.messageBox.error(ResetUserPasswordResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },
    },
  }
</script>

<style>
  .resetUserPassword {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    margin-top: 5%;
    background-color: #F0FFF0;
  }

  .resetUserPassword .user-table {
    border-top: 1px solid #ebeef5;
    margin-top: 50px;
  }

  .resetUserPassword .top {
  }

  .resetUserPassword .reset-btn {
    float: left;
    height: 50px;
    width: 20%;
    text-align: left;
    padding-left: 4%;
    padding-top: 7px;
  }

  .resetUserPassword .table-name {
    width: 80%;
    height: 50px;
    float: left;
    text-align: left;
    line-height: 50px;
    font-size: 18px;
    padding-left: 25%;
  }

  .resetUserPassword .el-table .warning-row {
    background: oldlace;
  }

  .resetUserPassword .el-table th > .cell {
    text-align: center;
  }
</style>
