import Config from '@/framework/common/config/Config.js'
let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)
let WebsiteHomePage = resolve => require(['@/moduleA/pc/components/home/factory/WebsiteHomePage.vue'], resolve)

export const ModuleARouterMap = [
  {
    path: '/home',
    component: Home,
    meta: {
      requireAuth: false,    //访问改地址，是否需要登录权限
      title: Config.pcTitle
    },
    children: [
      {
        path: 'websiteHomePage',
        component: WebsiteHomePage
      }
    ]
  },


]
