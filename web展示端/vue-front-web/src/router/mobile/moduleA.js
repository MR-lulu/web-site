let Header = resolve => require(['@/moduleA/mobile/components/header/Header.vue'], resolve)
let Page = resolve => require(['@/moduleA/mobile/components/home/factory/Page.vue'], resolve)
let DocumentLeft = resolve => require(['@/moduleA/mobile/components/parts/document/DocumentLeft.vue'], resolve)
let DocumentCenter = resolve => require(['@/moduleA/mobile/components/parts/document/DocumentCenter.vue'], resolve)

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
  {
    path: '/documentLeft',
    component: DocumentLeft
  },
  {
    path: '/documentCenter',
    component: DocumentCenter
  }
]
