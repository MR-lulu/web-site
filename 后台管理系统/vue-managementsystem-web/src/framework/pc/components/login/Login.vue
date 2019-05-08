<template>
  <div class="login">
    <!--登陆窗口-->
    <div class="top-content">
      <div class="inner-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-8 col-sm-offset-2 text from-index">
              <h1><strong>欢 迎 登 陆</strong></h1>
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
                  <!-- 账号 -->
                  <div class="form-group">
                    <label class="sr-only" for="form-password">password</label>
                    <input type="password" name="form-password" placeholder="请输入账号..."
                           class="form-password form-control"
                           id="form-password">
                  </div>

                  <!--  密码 -->
                  <div class="form-group">
                    <label class="sr-only" for="form-password">repassword</label>
                    <input type="password" name="form-repassword" placeholder="请输入密码..."
                           class="form-password form-control" id="form-repassword">
                  </div>

                  <!-- 修改按钮 -->
                  <button type="submit" class="btn">登  录</button>
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
  export default {
    name: 'Login2',
    data() {
      return {
        commodityMapData: null,
        loginTimer: null,
      }
    },
    created() {
    },
    computed: {
      // ...mapState(['cmdtyQuotationInfo']),
    },
    watch: {
      commodityMap: function (newVal, oldVal) {
        if (newVal) {
          //获取商品信息
          this.commodityMapData = newVal
        }
      }
    },
    methods: {}
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
