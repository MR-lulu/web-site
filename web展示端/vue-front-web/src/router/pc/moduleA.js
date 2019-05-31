let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)
let Header = resolve => require(['@/moduleA/pc/components/header/Header.vue'], resolve)

export const PC_ModuleARouterMap = [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/header',
    component: Header
  }
]
