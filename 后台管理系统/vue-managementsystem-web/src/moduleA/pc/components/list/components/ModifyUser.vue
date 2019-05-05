<template>
  <div>
    <!-- 修改登录信息弹出框 -->
    <el-dialog :title="$t('rs.moduleA.80200003000')/* 修改登录信息 */" :visible="modifyUserData.dialogModifyUserVisible" size="tiny" width="30%" :before-close="handleClose">
      <el-form ref="modifyUserForm" :model="modifyUserData.modifyUserForm" label-width="100px" :rules="modifyUserRules">
        <el-form-item :label="$t('rs.moduleA.80200001000')/* 编号 */">
          {{modifyUserData.modifyUserForm.ID}}
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.80200001002')/* 登录类型 */" prop="logonType">
          <el-select v-model="modifyUserData.modifyUserForm.logonType" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" style="width:100%">
            <el-option
              v-for="(item,index) in $t(logonType)"
              :key="index"
              :label="item"
              :value="index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.80200001003')/* 登录结果 */" prop="result">
          <el-select v-model="modifyUserData.modifyUserForm.result" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" style="width:100%">
            <el-option
              v-for="(item,index) in $t(logonResult)"
              :key="index"
              :label="item"
              :value="index">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.80200001013')/* 登录时间 */" prop="createTime">
          <el-date-picker type="datetime" :placeholder="$t('rs.moduleA.80200001007') /* 请选择 */" v-model="modifyUserData.modifyUserForm.createTime" style="width: 100%;"></el-date-picker>
        </el-form-item>
        <el-form-item >
          <el-button type="success" @click="handleSave('modifyUserForm')">{{$t('rs.moduleA.80200003001')}}<!-- 修改 --></el-button>
          <el-button @click="handleClose">{{$t('rs.moduleA.80200002002')}}<!-- 取消 --></el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import UserUpdateRequestVO from '@/moduleA/common/js/model/UserUpdateRequestVO'
export default {
  /**
   * 声明给父组件的名字
   */
  name: 'modifyUser',
  /**
   * 从父组件获取的参数
   */
  props: {
    modifyUserData: Object
  },
  data () {
    return {
      logonType: 'logonType',
      logonResult: 'logonStatus',
      modifyUserRules: {
        logonType: [
          {required: true, message: this.$i18n.t('rs.moduleA.80201000001') /* 请选择登录类型 */, trigger: 'change'}
        ],
        result: [
          {required: true, message: this.$i18n.t('rs.moduleA.80201000002') /* 请选择登录结果 */, trigger: 'change'}
        ],
        createTime: [
          {required: true, message: this.$i18n.t('rs.moduleA.80201000003') /* 请选择时间 */, trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    /**
     * 修改操作
     */
    handleSave (formName) {
      let _this = this
      this.$refs[formName].validate((valid) => {
        if (valid) {
          _this.messageBox.confirm('rs.framework.80201001002', _this.$i18n.t('rs.framework.80101001001'), null, () => {
            var userUpdateRequestVO = new UserUpdateRequestVO(_this.ProtocolContent.update)
            let logonInfo = userUpdateRequestVO.logonInfo
            logonInfo.logonID = _this.modifyUserData.modifyUserForm.ID
            logonInfo.logonType = _this.modifyUserData.modifyUserForm.logonType
            logonInfo.result = _this.modifyUserData.modifyUserForm.result
            logonInfo.createTime = _this.modifyUserData.modifyUserForm.createTime
            userUpdateRequestVO.modelInfo = logonInfo
            _this.communicateManger.httpCommunicate.getResponseVO(userUpdateRequestVO).then((data) => {
              // 操作成功
              if (data.returnCode >= 0) {
                _this.messageBox.success('9999999909002', _this.$i18n.t('rs.framework.80101001001'), null, () => {
                  // 通知父组件操作成功
                  this.modifyUserData.dialogModifyUserVisible = false
                  this.modifyUserData.modifyUserForm = {}
                  this.$refs['modifyUserForm'].resetFields()
                  this.$parent.searchList()
                })
              } else {
                _this.messageBox.error('rs.framework.80101001000', _this.$i18n.t('rs.framework.80101001001'), null, () => {
                  // 通知父组件操作失败
                })
              }
            }).catch(() => {
              _this.messageBox.error('rs.framework.80101001000', _this.$i18n.t('rs.framework.80101001001'), null, () => {
                // 通知父组件操作失败
              })
            })
          })
        }
      })
    },
    handleClose () {
      // 通知父组件关闭弹出框
      this.modifyUserData.dialogModifyUserVisible = false
      this.modifyUserData.modifyUserForm = ''
      this.$refs['modifyUserForm'].resetFields()
      this.$parent.searchList()
    }
  }
}
</script>

<style scoped>
</style>
