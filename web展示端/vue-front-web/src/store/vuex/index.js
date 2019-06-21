import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * 定义状态管理类
 * 管理主题
 * @type {Store}
 */
const store = new Vuex.Store({
  state: {
    theme: null,  //主题
    webTopInfo: null,  // 页头信息
    webBottomInfo: null,  // 页尾信息
    webInfo: null,  // 网站信息
    commonInfo: null,  // 公共信息
    navigationListInfo: null,  // 导航信息
    loginInfo: null, //登录信息
  },
  // 定义改变store中属性的方法
  mutations: {
    // 修改风格方法，并存储到localStorage中
    changeTheme: (state, theme) => {
      state.theme = theme
    },
    // 修改页头信息
    changeWebTopInfo: (state, webTopInfo) => {
      state.webTopInfo = webTopInfo
    },
    // 修改页尾信息
    changeWebBottomInfo: (state, webBottomInfo) => {
      state.webBottomInfo = webBottomInfo
    },
    // 修改网站信息
    changeWebInfo: (state, webInfo) => {
      state.webInfo = webInfo
    },
    // 修改公共信息
    changeCommonInfo: (state, commonInfo) => {
      state.commonInfo = commonInfo
    },
    // 修改导航列表信息
    changeNavigationListInfo: (state, navigationListInfo) => {
      state.navigationListInfo = navigationListInfo
    },
    // 修改用户登录信息
    changeLoginInfo: (state, loginInfo) => {
      state.loginInfo = loginInfo
    },
  },
  modules: {
    style: {
      state: {
        theme: null,
      },
      // 定义改变store中属性的方法
      mutations: {
        // 修改风格方法，并存储到localStorage中
        changeTheme: (state, theme) => {
          state.theme = theme
        },
      }
    }
  }
});

export default store
