let login = resolve => require(['@/framework/pc/components/login/Login.vue'], resolve)
export const FrameworkRouterMap = [
  {
    path: '/',
    component: login
  }
]
