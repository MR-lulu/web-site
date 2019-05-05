let login = resolve => require(['@/framework/pc/components/login/Login.vue'], resolve)
let register = resolve => require(['@/framework/pc/components/register/Register.vue'], resolve)
export const FrameworkRouterMap = [
  {
    path: '/',
    component: login
  },
  {
    path: '/register',
    component: register
  }
]
