let Home = resolve => require(['@/moduleA/mobile/components/home/Home.vue'], resolve)
let DocumentLeft = resolve => require(['@/moduleA/mobile/components/parts/document/DocumentLeft.vue'], resolve)
let DocumentCenter = resolve => require(['@/moduleA/mobile/components/parts/document/DocumentCenter.vue'], resolve)

export const M_ModuleARouterMap = [
  {
    path: '/m_index.html',
    component: Home
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
