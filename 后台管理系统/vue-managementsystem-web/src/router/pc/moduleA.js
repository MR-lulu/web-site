let userList = resolve => require(['@/moduleA/pc/components/list/UserList.vue'], resolve)
let Home = resolve => require(['@/moduleA/pc/components/home/Home.vue'], resolve)
export const ModuleARouterMap = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'userList',
        component: userList
      }
    ]
  }
]
