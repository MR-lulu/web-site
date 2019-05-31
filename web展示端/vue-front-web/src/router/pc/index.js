import Vue from 'vue'
import Router from 'vue-router'
import {ModuleARouterMap} from './moduleA.js'
import {FrameworkRouterMap} from './framework.js'
Vue.use(Router)

/**
 * 定义router
 * @type {VueRouter}
 */
const router = new Router({
  routes: FrameworkRouterMap.concat(ModuleARouterMap)
})

export default router
