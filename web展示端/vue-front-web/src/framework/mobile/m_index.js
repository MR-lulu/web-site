/* eslint-disable no-new */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from '@/router/index.js'
import store from '@/store/vuex/index.js'
import SystemInit from '@/framework/common/js/SystemInit.js'
import $ from 'jquery'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min.js'
import '@/commonjs/util/font-size.js'
import {isMobile} from '@/framework/common/js/global.js'
import Config from "../../assets/Config"

/**
 * 如果是电脑端打开的地址，那么久跳转到电脑端
 */
if (!isMobile()) {
  window.location.href = Config.pcUrl;
} else {

// 系统初始化类
  let systemInit = new SystemInit()

// 初始化
  init()

  /**
   *  初始化
   */
  function init() {
    initAsync()

  }

  /**
   * 异步初始化
   */
  async function initAsync() {
    await systemInit.initAsync()

    let i18n = systemInit.i18n
    /**
     * 初始化Vue对象
     */
    new Vue({
      el: '#app',
      router,
      store,
      i18n,
      components: {App},
      template: '<App/>'
    })

    Vue.use(MintUI)

    Vue.use(ElementUI, {
      size: 'medium',
      i18n: (key, value) => i18n.t(`rs.element.${key}`, value)
    })
  }
}
