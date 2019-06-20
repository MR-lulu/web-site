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
    loginInfo: null, //登录信息
    webModuleTreeClickType: null,  //组件树点击信息
    webModuleTree: null,  // 组件树数据信息
    updateWebModuleTreeFlag: 0,  // 组件更新标记
  },
  // 定义改变store中属性的方法
  mutations: {
    // 修改风格方法，并存储到localStorage中
    changeTheme: (state, theme) => {
      state.theme = theme
    },
    // 修改用户登录信息
    setloginInfo: (state, loginInfo) => {
      state.loginInfo = loginInfo
    },
    // 修改组件树点击信息
    setWebModuleTreeClickType: (state, webModuleTreeClickType) => {
      state.webModuleTreeClickType = webModuleTreeClickType
    },
    // 组件树数据信息
    setWebModuleTree: (state, webModuleTree) => {
      state.webModuleTree = webModuleTree
    },
    // 设置组件更新标记
    setUpdateWebModuleTreeFlag: (state, updateWebModuleTreeFlag) => {
      state.updateWebModuleTreeFlag = updateWebModuleTreeFlag
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
