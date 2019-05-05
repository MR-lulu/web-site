<template>
  <div>
    <!-- 添加登录信息弹出框 -->
    <el-dialog :title="$t('rs.moduleA.80200002000')/* 添加登录信息 */" :visible="addUserData.dialogAddUserVisible" size="tiny" width="30%" :before-close="handleClose">
      <el-form ref="addUserForm" :model="addUserForm" label-width="100px" :rules="addUserForm.addUserRules">
        <el-form-item :label="$t('rs.moduleA.80200001000')/* 编号 */" prop="ID">
          <el-input v-model="addUserForm.ID"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.80200001002')/* 登录类型 */" prop="logonType">
          <el-select v-model="addUserForm.logonType" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" style="width:100%">
            <el-option
              v-for="(item,index) in $t(logonType)"
              :key="index"
              :label="item"
              :value="index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.80200001003')/* 登录结果 */" prop="result">
          <el-select v-model="addUserForm.result" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" style="width:100%">
            <el-option
              v-for="(item,index) in $t(logonResult)"
              :key="index"
              :label="item"
              :value="index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.80200001013')/* 登录时间 */" prop="createTime">
          <el-date-picker type="datetime" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" v-model="addUserForm.createTime" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" @click="handleAdd('addUserForm')">{{$t('rs.moduleA.80200002001')}}<!-- 添加 --></el-button>
          <el-button @click="handleClose">{{$t('rs.moduleA.80200002002')}}<!-- 取消 --></el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import UserAddRequestVO from '@/moduleA/common/js/model/UserAddRequestVO'
export default {
  /**
   * 声明给父组件的名字
   */
  name: 'addUser',
  /**
   * 从父组件获取的参数
   */
  props: {
    addUserData: Object
  },
  data () {
    return {
      logonType: 'logonType',
      logonResult: 'logonStatus',
      addUserForm: {
        ID: '',
        logonType: '',
        result: '',
        createTime: '',
        addUserRules: {
          ID: [
            {required: true, message: this.$i18n.t('rs.moduleA.80201000000') /* 请输入编号 */, trigger: 'blur'}
          ],
          logonType: [
            {required: true, message: this.$i18n.t('rs.moduleA.80201000001') /* 请选择登录类型 */, trigger: 'change'}
          ],
          result: [
            {required: true, message: this.$i18n.t('rs.moduleA.80201000002') /* 请选择登录结果 */, trigger: 'change'}
          ],
          createTime: [
            {type: 'date', required: true, message: this.$i18n.t('rs.moduleA.80201000003') /* 请选择时间 */, trigger: 'change'}
          ]
        }
      }
    }
  },
  methods: {
    /**
     * 添加登录信息方法
     */
    handleAdd (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let _this = this
          this.messageBox.confirm('rs.framework.80201001001', _this.$i18n.t('rs.framework.80101001001'), null, () => {
            let userAddRequestVO = new UserAddRequestVO(_this.ProtocolContent.add)
            let logonInfo = userAddRequestVO.logonInfo
            logonInfo.logonID = _this.addUserForm.ID
            logonInfo.logonType = _this.addUserForm.logonType
            logonInfo.result = _this.addUserForm.result
            logonInfo.createTime = _this.addUserForm.createTime
            userAddRequestVO.modelInfo = logonInfo
            _this.communicateManger.httpCommunicate.getResponseVO(userAddRequestVO).then((data) => {
              if (data.returnCode >= 0) {
                _this.messageBox.success('9999999909001', _this.$i18n.t('rs.framework.80101001001'), null, () => {
                  // 通知父组件调用成功
                  this.addUserData.dialogAddUserVisible = false
                  this.$parent.searchList()
                })
              } else {
                _this.messageBox.error('rs.framework.80101001000', _this.$i18n.t('rs.framework.80101001001'), null, () => {
                })
              }
            }).catch(() => {
              _this.messageBox.error('rs.framework.80101001000', _this.$i18n.t('rs.framework.80101001001'), null, () => {
              })
            })
          })
        }
      })
    },
    handleClose () {
      // 通知父组件关闭弹出框
      this.addUserData.dialogAddUserVisible = false
      this.$refs['addUserForm'].resetFields()
      this.$parent.searchList()
    }
  }
}
</script>

<style scoped>
</style>
