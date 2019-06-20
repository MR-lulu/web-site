let login = resolve => require(['@/framework/pc/components/login/Login.vue'], resolve)
let error_404 = resolve => require(['@/framework/pc/components/error/404.vue'], resolve)
let error_401 = resolve => require(['@/framework/pc/components/error/401.vue'], resolve)
let error_500 = resolve => require(['@/framework/pc/components/error/500.vue'], resolve)
let error_504 = resolve => require(['@/framework/pc/components/error/504.vue'], resolve)

export const PC_FrameworkRouterMap = [
  {
    path: '/',
    component: login
  },
  {
    path: '/error_404',
    component: error_404
  },
  {
    path: '/error_401',
    component: error_401
  },
  {
    path: '/error_500',
    component: error_500
  },
  {
    path: '/error_504',
    component: error_504
  }
]
