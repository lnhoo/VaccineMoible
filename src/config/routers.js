export default [
    {
        path: '/login',
        name : 'login',
        component: resolve => require(['pages/user/login'], resolve)
    },
    {
        path: '*', //其他页面，强制跳转到列表页面
        redirect: '/login'
    }
   
]