let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)
let Page = resolve => require(['@/moduleA/pc/components/home/factory/Page.vue'], resolve)

export const PC_ModuleARouterMap = [
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
