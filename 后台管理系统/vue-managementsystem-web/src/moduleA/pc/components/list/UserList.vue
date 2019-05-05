<template>
  <div style="margin-top: 10px;width: 1200px;margin:0 auto">
    <section>
      <el-row>
        <el-col :span="24">
          <!--查询登录情况表单-->
          <el-form :inline="true" :model="searchForm" class="demo-form-inline">
            <div style="margin-left: 0px;float:left">
              <el-form-item :label="$t('rs.moduleA.80200001000') /* 编号 */">
                <el-input v-model="searchForm.logonID" :placeholder="$t('rs.moduleA.80200001000') /* 编号 */" style="width: 150px;"></el-input>
              </el-form-item>
              <el-form-item :label="$t('rs.moduleA.80200001004') /* 登录日期 */">
                <el-date-picker
                  v-model="searchForm.createTime"
                  type="daterange"
                  align="right"
                  :start-placeholder="$t('rs.moduleA.80200001005') /* 开始日期 */"
                  :end-placeholder="$t('rs.moduleA.80200001006') /* 结束日期 */"
                  :default-time="['00:00:00', '23:59:59']"
                >
                </el-date-picker>
              </el-form-item>
              <el-form-item :label="$t('rs.moduleA.80200001002') /* 登录类型 */">
                <el-select v-model="searchForm.logonType" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" style="width: 150px;">
                  <el-option
                    v-for="(item,index) in $t(options.logonTypeMap)"
                    :key="index"
                    :label="item"
                    :value="index">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item :label="$t('rs.moduleA.80200001003') /* 登录结果 */">
                <el-select v-model="searchForm.result" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" style="width: 150px;">
                  <el-option
                    v-for="(item,index) in $t(options.resultMap)"
                    :key="index"
                    :label="item"
                    :value="index">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
            <div style="margin-right: 0px;float:right;margin-bottom: 20px">
              <el-button type="primary" @click="onSubmit">{{$t('rs.moduleA.80200001008')}}<!-- 查询 --></el-button>
              <el-button type="primary"  @click="handleAddForward()">{{$t('rs.moduleA.80200001009')}}<!-- 添加 --></el-button>
            </div>
          </el-form>
        </el-col></el-row></section>
    <!--表格-->
    <div class="tableDiv">
      <el-table
        :data="nowTableData"
        stripe
        style="width: 1200px">
        <el-table-column
          prop="logonID"
          sortable
          header-align="center"
          :label="$t('rs.moduleA.80200001000')/* 编号 */"
          style="width: 16%">
        </el-table-column>
        <el-table-column
          prop="logonIP"
          sortable
          header-align="center"
          :label="$t('rs.moduleA.80200001001')/* IP地址 */"
          style="width: 16%">
        </el-table-column>
        <el-table-column
          prop="logonType"
          style="width: 16%"
          sortable
          header-align="center"
          :label="$t('rs.moduleA.80200001002')/* 登录类型 */">
          <template slot-scope="scope">{{$t(`logonType.${scope.row.logonType}`)}}</template><!-- 1:电脑 , 2:手机-->
        </el-table-column>
        <el-table-column
          prop="result"
          style="width: 16%"
          sortable
          header-align="center"
          :label="$t('rs.moduleA.80200001003')/* 登录结果 */">
          <template slot-scope="scope">{{$t(`logonStatus.${scope.row.result}`)}}</template><!-- 1:登录成功, 2:登录失败 -->
        </el-table-column>
        <el-table-column
          prop="createTime"
          sortable
          header-align="center"
          :label="$t('rs.moduleA.80200001013')/* 登录时间 */"
          style="width: 16%">
        </el-table-column>
        <el-table-column :label="$t('rs.moduleA.80200001010')/* 操作 */" style="text-align: left"  header-align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">{{$t('rs.moduleA.80200001011')}}<!-- 编辑 --></el-button>
            <el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">{{$t('rs.moduleA.80200001012')}}<!-- 删除 --></el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--分页-->
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        prevText="上一页"
        nextText="下一页"
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
    <!--添加信息子组件-->
    <add-user :add-user-data="childrenData.addUserData"></add-user>
    <!--修改信息子组件-->
    <modify-user :modify-user-data="childrenData.modifyUserData"> </modify-user>
  </div>
</template>
<script type="text/ecmascript-6">
import UserListRequestVO from '@/moduleA/common/js/model/UserListRequestVO'
import UserDelRequestVO from '@/moduleA/common/js/model/UserDelRequestVO'
import addUser from './components/AddUser.vue'
import modifyUser from './components/ModifyUser.vue'
import LogonInfoVO from '@/moduleA/pc/js/model/LogonInfoVO'
export default {
  name: 'userList',
  /**
   * 声明引用的子组件
   */
  components: {
    'addUser': addUser,
    'modifyUser': modifyUser
  },
  data () {
    return {
      searchForm: {
        logonID: '',
        logonType: '',
        result: [],
        createTime: ''
      },
      // 存放整体的数据列表
      tableData: [],
      // 存放当前页展示的数据列表
      nowTableData: [],
      options: {
        logonTypeMap: 'logonType',
        resultMap: 'logonStatus'
      },
      places: [],
      childrenData: {
        addUserData: {
          dialogAddUserVisible: false
        },
        modifyUserData: {
          dialogModifyUserVisible: false,
          modifyUserForm: {}
        }
      },
      currentPage: 1,
      total: 0,
      pageSize: 5
    }
  },
  /**
   * 加载时执行获取用户登录列表数据
   */
  created () {
    let _this = this
    let userListRequestVO = new UserListRequestVO(this.ProtocolContent.list)
    userListRequestVO.pageNumber = 1
    userListRequestVO.pageSize = 20
    this.communicateManger.httpCommunicate.getResponseVO(userListRequestVO).then((UserListResponseVO) => {
      // console.log(data)
      // 将总的数据列表放入内存
      _this.tableData = UserListResponseVO.resultList
      // 获取总行数
      _this.total = UserListResponseVO.resultList.length
      // 获取分页之后的列表数据
      _this.nowTableData = _this.tableData.slice((_this.currentPage - 1) * _this.pageSize, _this.currentPage * _this.pageSize)
    }).catch(() => {
      this.messageBox.error('rs.framework.80101001000')
    })
    //
    // this.$http.get('/api/getTable').then((response) => {
    //   response = response.data
    //   if (response.code === ERR_OK) {
    //     this.tableData = response.datas
    //   }
    // })
    // this.$http.get('/api/getOptions').then((response) => {
    //   response = response.data
    //   if (response.code === ERR_OK) {
    //     this.options = response.datas
    //     this.places = response.places
    //   }
    // })
  },
  methods: {
    /**
     * 查询列表数据
     */
    searchList () {
      let userListRequestVO = new UserListRequestVO(this.ProtocolContent.list)
      userListRequestVO.pageNumber = 1
      userListRequestVO.pageSize = 20
      let _this = this
      this.communicateManger.httpCommunicate.getResponseVO(userListRequestVO).then((data) => {
        // console.log(data)
        _this.tableData = data.resultList
        _this.total = data.resultList.length
        _this.nowTableData = _this.tableData.slice((_this.currentPage - 1) * _this.pageSize, _this.currentPage * _this.pageSize)
      })
    },
    /**
     * 搜索方法
     */
    onSubmit () {
      this.$message('模拟数据，这个方法并不管用哦~')
    },
    /**
     * 删除方法
     * @param index 索引
     * @param row 行值
     */
    handleDelete (index, row) {
      let _this = this
      this.messageBox.confirm('rs.framework.80201001000', _this.$i18n.t('rs.framework.80101001001'), null, function () {
        var userDelRequestVO = new UserDelRequestVO(_this.ProtocolContent.delete)
        userDelRequestVO.ID = row.logonID
        _this.communicateManger.httpCommunicate.getResponseVO(userDelRequestVO).then((data) => {
          // console.log(data)
          _this.messageBox.success('9999999909003', _this.$i18n.t('rs.framework.80101001001'), null, function () {
            _this.searchList()
          })
        })
      })
      // this.tableData.splice(index, 1)
      // this.$message({
      //   message: '操作成功！',
      //   type: 'success'
      // })
    },
    /**
     * 添加弹框弹出
     */
    handleAddForward () {
      this.childrenData.addUserData.dialogAddUserVisible = true
    },
    /**
     * 修改弹框弹出
     * @param index 索引
     * @param row 行值
     */
    handleEdit (index, row) {
      this.childrenData.modifyUserData.dialogModifyUserVisible = true
      let logonInfoVO = new LogonInfoVO()
      logonInfoVO.ID = row.logonID
      logonInfoVO.logonType = row.logonType
      logonInfoVO.result = row.result
      logonInfoVO.createTime = row.createTime
      this.childrenData.modifyUserData.modifyUserForm = logonInfoVO
      this.table_index = index
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.nowTableData = this.tableData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
    }
  }
}
</script>
<style>
  .el-pagination {
    text-align: center;
    margin-top: 30px;
  }

  .el-message-box__btns .cancel {
    float: right;
    margin-left: 10px;
  }

</style>
