import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
/**
 * 定义状态管理类
 * 管理主题
 * @type {Store}
 */
var store = new Vuex.Store({
  modules: {
    style: {
      state: {
        theme: null
      },
      // 定义改变store中属性的方法
      mutations: {
        // 修改风格方法，并存储到localStorage中
        changeTheme: (state, theme) => {
          state.theme = theme
        }
      }
    }
  }
})

export default store
