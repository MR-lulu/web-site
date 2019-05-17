import Config from '@/framework/common/config/Config.js'
let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)
let WebsiteHomePage = resolve => require(['@/moduleA/pc/components/home/factory/WebsiteHomePage.vue'], resolve)
let UserManage = resolve => require(['@/moduleA/pc/components/home/factory/UserManage.vue'], resolve)
let SystemSet = resolve => require(['@/moduleA/pc/components/home/factory/SystemSet.vue'], resolve)
let PartsType = resolve => require(['@/moduleA/pc/components/home/tables/PartsType.vue'], resolve)

export const ModuleARouterMap = [
  {
    path: '/home',
    component: Home,
    meta: {
      requireAuth: true,    //访问改地址，是否需要登录权限
      title: Config.pcTitle
    },
    children: [
      {
        path: 'websiteHomePage',    // 网站首页
        component: WebsiteHomePage,
        meta: {
          requireAuth: true,    //访问改地址，是否需要登录权限
          title: Config.pcTitle
        }
      },
      {
        path: 'userManage',    // 用户管理
        component: UserManage,
        meta: {
          requireAuth: true,    //访问改地址，是否需要登录权限
          title: Config.pcTitle
        }
      },
      {
        path: 'systemSet',    // 系统设置
        component: SystemSet,
        meta: {
          requireAuth: true,    //访问改地址，是否需要登录权限
          title: Config.pcTitle
        },
        children: [
          {
            path: 'partsType',    // 零件种类
            component: PartsType,
            meta: {
              requireAuth: true,    //访问改地址，是否需要登录权限
              title: Config.pcTitle
            },
          }
        ]
      },
    ]
  },

  {
    path: '/partsDisplay',
    component: PartsDisplay
  }

]
