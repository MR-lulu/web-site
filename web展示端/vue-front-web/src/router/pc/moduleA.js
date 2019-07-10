let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)

export const PC_ModuleARouterMap = [
  {
    path: '/index',
    component: Home
  },
]
