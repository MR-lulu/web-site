<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer form-style" v-show="showLogin">
        <div class="manage_tip">
          <p>{{$t('rs.framework.80100000010')}}<!-- 欢迎注册 --></p>
        </div>
        <el-form :model="registerModel" :rules="rules" ref="registerModel">
          <el-form-item prop="username" :label="$t('rs.framework.80100000001') /* 用户名 */">
            <el-input v-model="registerModel.username" :placeholder="$t('rs.framework.80100000001') /* 用户名 */"></el-input>
          </el-form-item>
          <el-form-item prop="password" :label="$t('rs.framework.80100000002') /* 密码 */">
            <el-input type="password" :placeholder="$t('rs.framework.80100000002') /* 密码 */" v-model="registerModel.password"></el-input>
          </el-form-item>
          <!--<el-form-item prop="checkPwd">-->
          <!--<el-input type="password" v-model="pwd" placeholder="确认密码"></el-input>-->
          <!--</el-form-item>-->
          <el-form-item  :label="$t('rs.framework.80100000011') /* 推荐码 */">
            <el-input v-model="registerModel.authCode" :placeholder="$t('rs.framework.80100000011') /* 推荐码 */"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('registerModel')" style="width: 100%;margin-top: 10px">{{$t('rs.framework.80100000012')}}<!-- 注册 --></el-button>
            <div class="goback_btn"><a @click="goBack()" style="margin-top: 10px">{{$t('rs.framework.80100000013')}}<!-- 去登录 --></a></div>
          </el-form-item>
        </el-form>
      </section>
    </transition>
  </div>
</template>

<script>
import RegisterRequestVO from '@/framework/common/js/model/RegisterRequestVO'

export default {
  data () {
    return {
      registerModel: {
        username: '',
        password: '',
        authCode: ''
      },
      pwd: '',
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
    /**
     * 注册方法
     * @param formName
     * @returns {Promise.<void>}
     */
    async submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          let _this = this
          var registerRequestVO = new RegisterRequestVO(_this.ProtocolContent.register)
          registerRequestVO.userNO = _this.registerModel.userName
          registerRequestVO.password = _this.registerModel.password
          registerRequestVO.authCode = _this.registerModel.authCode
          registerRequestVO.deviceID = 'deviceID123123'
          this.communicateManger.httpCommunicate.getResponseVO(registerRequestVO).then((data) => {
            if (data.returnCode >= 0) {
              _this.messageBox.success('9999999909094', _this.$i18n.t('rs.framework.80101001001'), null, () => {
                _this.$router.push({
                  path: '/'
                })
              })
            } else {
              _this.messageBox.error('rs.framework.80101001000', _this.$i18n.t('rs.framework.80101001001'), null, () => {
              })
            }
          })
        }
      })
    },
    /**
     * 返回登录页面方法
     */
    goBack () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/theme/pc/default/framework/css/mixin';

  .manage_tip{
    position: absolute;
    width: 100%;
    top: -100px;
    left: 0;
    p{
      font-size: 34px;
    }
  }
  .form_contianer{
    .wh(320px, 370px);
    .ctp();
  }
  .form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
  }
  .form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
  }
</style>
