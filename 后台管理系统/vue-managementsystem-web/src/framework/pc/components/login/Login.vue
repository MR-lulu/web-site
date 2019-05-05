<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer form-style" v-show="showLogin">
        <div class="manage_tip">
          <p class = "manage_p">{{$t('rs.framework.80100000000')}}<!-- 欢迎登录 --></p>
        </div>
        <el-form label-position="right" :model="loginForm" :rules="rules" ref="loginForm">
          <el-form-item prop="username" :label="$t('rs.framework.80100000001')/* 用户名 */">
            <el-input v-model="loginForm.username" :placeholder="$t('rs.framework.80100000001')/* 用户名 */"><span></span></el-input>
          </el-form-item>
          <el-form-item prop="password" :label="$t('rs.framework.80100000002')/* 密码 */">
            <el-input type="password" :placeholder="$t('rs.framework.80100000002')/* 密码 */"
                      v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item :label="$t('rs.framework.80100000003')/* 语言 */">
            <el-select class="login-el-select" v-model="languageValue" @change="changeLanguage">
              <el-option
                v-for="item in languageOptions"
                :key="item.languageID"
                :label="item.name"
                :value="item.dirName">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item :label="$t('rs.framework.80100000004')/* 主题 */">
            <el-select class="login-el-select" v-model="theme" @change="changeThemes">
              <el-option
                v-for="(theme,index) in themeOptions" :key="index"
                :label="$t(theme)"
                :value="index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <el-button type="primary" @click="submitForm('loginForm')" style="width: 100%;margin-top: 10px">
          {{$t('rs.framework.80100000005')}}<!-- 登录 --></el-button>
        <div class="register_btn"><a @click="register()">{{$t('rs.framework.80100000006')}}<!-- 注册新账号 --></a></div>
        <p class="tip">{{$t('rs.framework.80100000007')}}<!-- 温馨提示： --></p>
        <p class="tip">{{$t('rs.framework.80100000008')}}<!-- 未登录过的新用户，自动注册 --></p>
        <p class="tip">{{$t('rs.framework.80100000009')}}<!-- 注册过的用户可凭账号密码登录 --></p>
      </section>
    </transition>
  </div>
</template>

<script>
import LogonRequestVO from '@/framework/common/js/model/LogonRequestVO'
import { setUserID, setSessionID } from '@/store/sessionstorage/index.js'
import { changeLanguage } from '@/commonjs/util/languageSet.js'
import Config from '@/framework/common/config/Config.js'

export default {
  inject: ['reload'],
  data: function () {
    return {
      languageValue: this.memoryData.lang,
      languageOptions: this.memoryData.langs,
      themeOptions: Config.theme,
      theme: this.localStorage.getTheme('default'),
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, message: this.$i18n.t('rs.framework.80101000000')/* 请输入用户名 */, trigger: 'blur'}
        ],
        password: [
          {required: true, message: this.$i18n.t('rs.framework.80101000001')/* 请输入密码 */, trigger: 'blur'}
        ]
      },
      showLogin: true
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          let userID = this.loginForm.username
          var logonRequestVO = new LogonRequestVO(this.ProtocolContent.logon)
          logonRequestVO.userNO = userID
          logonRequestVO.password = this.loginForm.password
          logonRequestVO.authCode = '1'
          logonRequestVO.deviceID = '1'
          this.communicateManger.httpCommunicate.getResponseVO(logonRequestVO).then((data) => {
            if (data.returnCode > 0) {
              setUserID(userID)
              setSessionID(data.returnCode)
              let router = this.$router
              // this.messageBox.alert('102101', null, function () {
              router.push('/home/userList')
              // })
            }
          })
        }
      })
    },
    register () {
      this.$router.push('/register')
    },
    /**
     * 改变语言
     */
    changeLanguage: function () {
      changeLanguage(this.languageValue)
      this.reload()
    },
    /**
     * 改变主题
     */
    changeThemes: function () {
      // 将主题存储到localStorage
      this.localStorage.setTheme(this.theme)
      // 设置主题
      var style = document.getElementById('pc_style')
      style.href = `assets/theme/pc/${this.theme}/framework/css/style.css`
    }
  },
  mounted () {
    // 加载之前先给一个可以登录的用户
    let _self = this
    let admin = {
      username: 'test',
      password: '111111'
    }
    _self.loginForm.username = admin.username
    _self.loginForm.password = admin.password
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/theme/pc/default/framework/css/mixin';

  .form_contianer{
    .wh(320px, 530px);
    .ctp();
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
  .login-el-select{
    width:100%;
  }
  .register_btn{
    text-align: right;
    color: #007cff;
    cursor:pointer;
    font-size: 12px;
    margin-top: 10px;
  }
  .manage_tip{
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p{
      font-size: 34px;
    }
  }

</style>
