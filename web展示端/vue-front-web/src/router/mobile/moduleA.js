let Home = resolve => require(['@/moduleA/mobile/components/home/Home.vue'], resolve)
let Page = resolve => require(['@/moduleA/mobile/components/home/factory/Page.vue'], resolve)

export const M_ModuleARouterMap = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'page',    // 网站首页
        component: Page,
      },
    ]
  },
]
