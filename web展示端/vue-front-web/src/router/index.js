import Vue from 'vue'
import Router from 'vue-router'
import {PC_ModuleARouterMap} from './pc/moduleA.js'
import {PC_FrameworkRouterMap} from './pc/framework.js'
import {M_ModuleARouterMap} from './mobile/moduleA.js'
import {M_FrameworkRouterMap} from './mobile/framework.js'
import {isMobile} from '@/framework/common/js/global.js'
import Config from "../assets/Config";


Vue.use(Router)

function useType() {
  if (isMobile()) {
    return M_ModuleARouterMap.concat(M_FrameworkRouterMap)
  } else {
    return PC_ModuleARouterMap.concat(PC_FrameworkRouterMap)
  }
}

/**
 * 定义router
 * @type {VueRouter}
 */
const router = new Router({
  //mode: 'history',  //去掉地址前的#号
  routes: useType(),
  linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  document.getElementById('web-title').innerHTML = Config.webTitle;
  next()
})

export default router
