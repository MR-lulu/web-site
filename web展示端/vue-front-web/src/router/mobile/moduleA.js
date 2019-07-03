let Header = resolve => require(['@/moduleA/mobile/components/header/Header.vue'], resolve)
let Page = resolve => require(['@/moduleA/mobile/components/home/factory/Page.vue'], resolve)

export const M_ModuleARouterMap = [
  {
    path: '/',
    component: Header,
    children: [
      {
        path: 'page',    // 网站首页
        component: Page,
      },
    ]
  },
]
