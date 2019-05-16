<template>
  <!--修改用户信息-->
  <div class="updateUserInfo">
    <!--表单名-->
    <div class="form-name">
      <!--修改用户信息-->
      <span>{{$t('rs.moduleA.20000000031')}}</span>
    </div>
    <!--表单内容-->
    <div class="form-1">
      <el-form :model="formData" :rules="rules" ref="formData" label-width="100px" class="demo-ruleForm">
        <el-form-item :label="$t('rs.moduleA.20000000032') /*用户账号*/" prop="userName">
          <el-input v-model="formData.userName" disabled
                    :placeholder="$t('rs.moduleA.20000000033') /*请输入用户账号*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000034') /*旧密码*/" prop="password">
          <el-input v-model="formData.password" type="password"
                    :placeholder="$t('rs.moduleA.20000000035') /*请输入旧密码*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000036') /*绑定手机*/" prop="phone">
          <el-input v-model="formData.phone" :placeholder="$t('rs.moduleA.20000000037') /*请输入手机号*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000038') /*新密码*/" prop="newPassword">
          <el-input v-model="formData.newPassword" type="password"
                    :placeholder="$t('rs.moduleA.20000000039') /*请输入新密码*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000040') /*绑定邮箱*/" prop="mail">
          <el-input v-model="formData.mail" :placeholder="$t('rs.moduleA.20000000041') /*请输入绑定的邮箱*/"></el-input>
        </el-form-item>
        <el-form-item :label="$t('rs.moduleA.20000000042') /*重复新密码*/" prop="rNewPassword">
          <el-input v-model="formData.rNewPassword" type="password"
                    :placeholder="$t('rs.moduleA.20000000043') /*请输入重复新密码*/"></el-input>
        </el-form-item>
      </el-form>
      <!--按钮-->
      <div class="btn">
        <!--修改-->
        <el-button type="primary" @click="submitForm('formData')">{{$t('rs.moduleA.20000000044')}}</el-button>
        <!--重置-->
        <el-button @click="resetForm('formData')">{{$t('rs.moduleA.20000000045')}}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    getLoginUserInfo,
    getUserPasswordbyMd5,
    setLoginUserInfo,
    setUserPasswordbyMd5
  } from '@/store/sessionstorage/index.js'
  import Tools from '@/commonjs/util/mall.tools.js'
  import md5 from 'js-md5';
  import UpdateUserInfoRequestVO from '@/moduleA/common/js/model/UpdateUserInfoRequestVO.js'
  import UserInfoRequestVO from '@/moduleA/common/js/model/UserInfoRequestVO.js'

  export default {
    name: "UpdateUserInfo",
    data() {
      var validateRNewPassword = (rule, value, callback) => {
        if (value !== this.formData.newPassword) {
          callback(new Error(this.$t('rs.staticText.30000000011')));  //两次输入密码不一致!
        } else {
          callback();
        }
      };
      return {
        userInfo: '',
        formData: {
          phone: '',
          mail: '',
          userName: '',
          password: '',
          newPassword: '',
          rNewPassword: '',
        },
        rules: {
          phone: [
            {required: true, message: this.$t('rs.moduleA.20000000037'), trigger: 'change'},  //请输入手机号
            {
              validator: function (rule, value, callback) {
                if (Tools.isPhone(value) == false) {
                  callback(new Error('请输入正确的手机号'));  // 请输入正确的手机号
                } else {
                  callback();
                }
              }, trigger: 'change'
            }
          ],
          mail: [
            {type: 'email', required: true, message: this.$t('rs.staticText.30000000013'), trigger: 'change'}  //请输入正确的邮箱地址
          ],
          userName: [
            {required: true, message: this.$t('rs.staticText.30000000014'), trigger: 'change'}  // 请输入正确的账号
          ],
          password: [
            {required: false, message: this.$t('rs.staticText.30000000015'), trigger: 'change'},  // 请输入密码
            {min: 6, max: 20, message: this.$t('rs.staticText.30000000016')},  // 长度在 6 到 20 个字符
            {pattern: /^(\w){6,20}$/, message: this.$t('rs.staticText.30000000017')} // 只能输入6-20个字母、数字、下划线
          ],
          newPassword: [
            {required: false, message: this.$t('rs.staticText.30000000018'), trigger: 'change'},  // 请输入新密码
            {min: 6, max: 20, message: this.$t('rs.staticText.30000000016')},  // // 长度在 6 到 20 个字符
            {pattern: /^(\w){6,20}$/, message: this.$t('rs.staticText.30000000017')}  // 只能输入6-20个字母、数字、下划线
          ],
          rNewPassword: [
            {required: false, message: this.$t('rs.staticText.30000000019'), trigger: 'change'},  // 请重复输入新密码
            {min: 6, max: 20, message: this.$t('rs.staticText.30000000016')},  // // 长度在 6 到 20 个字符
            {pattern: /^(\w){6,20}$/, message: this.$t('rs.staticText.30000000017')},  // 只能输入6-20个字母、数字、下划线
            {validator: validateRNewPassword}
          ]
        }
      };
    },
    created() {
      // 初始化获取用户信息
      this.userInfo = JSON.parse(getLoginUserInfo());
      if (!Tools.isNull(this.userInfo)) {
        this.formData.phone = this.userInfo.phone;
        this.formData.mail = this.userInfo.mail;
        this.formData.userName = this.userInfo.username;
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (!Tools.isNull(this.formData.newPassword) && getUserPasswordbyMd5() != md5.hex(this.formData.password)) {
              this.messageBox.error(this.$t('rs.staticText.30000000021'));
              return false;
            } else {
              this.messageBox.confirm(this.$t('rs.staticText.30000000020'), this.$t('rs.staticText.30000000008'), () => {  //您确认要修改用户信息吗? 提示
              }, () => {
                // 更新用户信息
                this.updateUserInfo();
              }, () => {
                // 取消
              });
            }
          } else {
            return false;
          }
        });
      },
      // 重置表单
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      // 修改用户信息
      updateUserInfo: function () {
        let updateUserInfoRequestVO = new UpdateUserInfoRequestVO(this.ProtocolContent.updateUserInfo);
        updateUserInfoRequestVO.userId = this.userInfo.userId;
        updateUserInfoRequestVO.phone = this.formData.phone;
        updateUserInfoRequestVO.mail = this.formData.mail;
        if (!Tools.isNull(this.formData.newPassword)) {
          updateUserInfoRequestVO.password = md5.hex(this.formData.newPassword);
        }
        let _that = this;
        this.communicateManger.httpCommunicate.getResponseVO(updateUserInfoRequestVO, "/user/addOrModify").then((UpdateUserInfoResponseVO) => {
          if (UpdateUserInfoResponseVO.getStatus == 1000 && UpdateUserInfoResponseVO.getResultCode > 0) {
            this.messageBox.success(UpdateUserInfoResponseVO.getMsg);
            // 重新获取数据
            _that.getUserInfo();
          } else {
            this.messageBox.error(UpdateUserInfoResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      },

      // 根据用户ID获取用户信息
      getUserInfo: function () {
        let userInfoRequestVO = new UserInfoRequestVO(this.ProtocolContent.userInfo);
        this.communicateManger.httpCommunicate.getResponseVO(userInfoRequestVO, "/user/query/detail/" + this.userInfo.userId).then((UserInfoResponseVO) => {
          if (UserInfoResponseVO.getStatus == 1000) {
            this.$store.commit('setloginInfo', UserInfoResponseVO.getUser);
            setLoginUserInfo(JSON.stringify(UserInfoResponseVO.getUser));
            setUserPasswordbyMd5(md5.hex(this.formData.newPassword));
          } else {
            this.messageBox.error(UserInfoResponseVO.getMsg);
          }
        }).catch(() => {
          this.messageBox.error(this.$t('rs.staticText.30000000001'));  //对不起，未知异常，请联系客服
        })
      }
    }
  }
</script>

<style>
  .updateUserInfo {
    width: 90%;
    border: 1px solid #ebeef5;
    margin: 0 auto;
    background-color: #F0FFF0;
    margin-top: 5%;
  }

  .updateUserInfo .form-name {
    font-size: 18px;
    padding-top: 2%;
  }

  .updateUserInfo .form-1 {
    width: 90%;
    margin: 0 auto;
    height: 260px;
    margin-top: 3%;
  }

  .updateUserInfo .form-1 .el-form-item {
    margin-bottom: 22px;
    float: left;
    width: 50%;
  }

  .updateUserInfo .form-1 .el-button {
    width: 120px;
  }

</style>
