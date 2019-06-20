import Config from '@/framework/common/config/Config.js'
let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)
let WebsiteHomePage = resolve => require(['@/moduleA/pc/components/home/factory/WebsiteHomePage.vue'], resolve)
let UserManage = resolve => require(['@/moduleA/pc/components/home/factory/UserManage.vue'], resolve)
let SystemSet = resolve => require(['@/moduleA/pc/components/home/factory/SystemSet.vue'], resolve)
let MyWebSite = resolve => require(['@/moduleA/pc/components/home/factory/MyWebSite.vue'], resolve)

let SlideShow = resolve => require(['@/moduleA/pc/components/parts/SlideShow.vue'], resolve)

export const PC_ModuleARouterMap = [
  {
    path: '/SlideShow',
    component: SlideShow,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'websiteHomePage',    // 网站首页
        component: WebsiteHomePage,
      },
      {
        path: 'userManage',    // 用户管理
        component: UserManage,
      },
      {
        path: 'myWebSite',    // 我的网页
        component: MyWebSite,
      },
      {
        path: 'systemSet',    // 系统设置
        component: SystemSet,
      },
    ]
  },
]
