<template>
  <div class="login">
    <!--登陆窗口-->
    <div class="top-content">
      <div class="inner-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2 text from-index">
              <!--欢 迎 登 陆-->
              <h1><strong>{{$t('rs.moduleA.20000000002')}}</strong></h1>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3 form-box from-index">
              <div class="form-top">
                <div class="form-top-left">
                  <h3>Login to our site</h3>
                  <p>Enter your account and password to login</p>
                </div>
              </div>
              <div class="form-bottom">
                <form role="form" action="" method="post" class="login-form">
                  <!--账号-->
                  <div class="form-group">
                    <label class="sr-only" for="form-username">Username</label>
                    <input type="text" name="form-username" v-model="uaserName"
                           :placeholder="$t('rs.moduleA.20000000003')/* 请输入用户名... */"
                           class="form-username form-control" id="form-username"
                           v-bind:class="{ input_error: isActiveUaserName }" v-on:focus="inputFocus(1)">
                  </div>
                  <!--密码-->
                  <div class="form-group">
                    <label class="sr-only" for="form-password">Password</label>
                    <input type="password" name="form-password" v-model="password"
                           :placeholder="$t('rs.moduleA.20000000004')/* 请输入密码... */"
                           class="form-password form-control" id="form-password"
                           v-bind:class="{ input_error: isActivePassword }" v-on:focus="inputFocus(2)">
                  </div>

                  <!--验证码-->
                  <div class="input-group" id="box2">
                    <input type="text" class="form-control" v-model="inputSecurityCode"
                           :placeholder="$t('rs.moduleA.20000000005')/* 请输入验证码... */"
                           v-bind:class="{ input_error: isActiveSecurityCode }" v-on:focus="inputFocus(3)"/>
                    <span><canvas id="canvas" width="120" height="50"></canvas>
                    <a href="#" v-on:click="drawPic()">{{$t('rs.moduleA.20000000006')}}</a></span>  <!--看不清，换一张-->
                  </div>

                  <!--登 陆-->
                  <button type="button" class="btn" v-on:click="submitCheck">{{$t('rs.moduleA.20000000001')}}</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="background">
      <img class="background-image" src="@/assets/images/loginbackground.jpg">
    </div>
  </div>
</template>

<script>
  import StringUtils from '@/commonjs/util/mall.stringutils.js'
  import SecurityCodeUtil from '@/commonjs/util/securityCodeUtil.js'

  export default {
    name: 'Login',
    data() {
      return {
        securityCodeTimer: null,
        uaserName: null,
        password: null,
        isActiveUaserName: false,
        isActivePassword: false,
        isActiveSecurityCode: false,
        securityCode: null,
        inputSecurityCode: null,
      }
    },
    created() {
      // 验证码生成
      this.securityCodeTimer = setTimeout(() => {
        this.drawPic();
        clearInterval(this.securityCodeTimer);
      }, 100);
    },
    computed: {
      // ...mapState(['cmdtyQuotationInfo']),
    },
    methods: {
      //登陆提交数据验证
      submitCheck: function () {
        let flag = true;
        //判断元素是否为空
        if (StringUtils.isNull(this.uaserName)) {
          this.isActiveUaserName = true;
          flag = false;
        }
        if (StringUtils.isNull(this.password)) {
          this.isActivePassword = true;
          flag = false;
        }
        if (StringUtils.isNull(this.inputSecurityCode) || (this.securityCode.toLowerCase()) != (this.inputSecurityCode.toLowerCase())) {
          this.isActiveSecurityCode = true;
          flag = false;
        }
        if (flag) {
          // 发送登陆请求
        }
      },

      //输入框获取焦点时做出反应
      inputFocus: function (flag) {
        if (flag == 1) {
          this.isActiveUaserName = false;
        } else if (flag == 2) {
          this.isActivePassword = false;
        } else if (flag == 3) {
          this.isActiveSecurityCode = false;
        }
      },

      //安全码生成
      drawPic: function () {
        this.securityCode = SecurityCodeUtil.drawPic();
      }
    }
  }
</script>

<style scoped>
  @import '../../../../assets/css/login/css/loginstyle.css';
  @import '../../../../assets/css/login/css/form-elements.css';
</style>

<style>
  .login {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 300;
    color: #888;
    line-height: 30px;
    text-align: center;
  }

  .login .background{
    left: 0px;
    top: 0px;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    height: 100%;
    width: 100%;
    z-index: 1;
    position: fixed;
  }
  .login .background .background-image{
    position: absolute;
    margin: 0px;
    padding: 0px;
    border: none;
    width: 100%;
    height: 100%;
    max-height: none;
    max-width: none;
    z-index: -2;
    left: 0px;
  }

  .login .from-index {
    z-index: 2;
  }
</style>
