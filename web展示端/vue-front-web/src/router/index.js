import Vue from 'vue'
import Router from 'vue-router'
import {PC_ModuleARouterMap} from './pc/moduleA.js'
import {PC_FrameworkRouterMap} from './pc/framework.js'
import {M_ModuleARouterMap} from './mobile/moduleA.js'
import {M_FrameworkRouterMap} from './mobile/framework.js'
import {isMobile} from '@/framework/common/js/global.js'


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
  routes: useType(),
  linkActiveClass: 'active',
})

export default router
