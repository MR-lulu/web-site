import Vue from 'vue'
import Router from 'vue-router'
import {ModuleARouterMap} from './moduleA.js'
import {FrameworkRouterMap} from './framework.js'
import {getUserID} from '@/store/sessionstorage/index.js'
import Tools from '@/commonjs/util/mall.tools.js'
import {MessageBox} from 'element-ui'

Vue.use(Router)

/**
 * 定义router
 * @type {VueRouter}
 */
const router = new Router({
  routes: FrameworkRouterMap.concat(ModuleARouterMap)
})

/**
 * 权限校验
 */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  if (to.meta.requireAuth) {
    if (!Tools.isNull(getUserID())) {
      next()
    } else {
      MessageBox.alert('权限不足，请登录使用');
      next({
        path: '/',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

export default router
