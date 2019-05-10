let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)
export const ModuleARouterMap = [
  {
    path: '/home',
    component: Home
  }
]
