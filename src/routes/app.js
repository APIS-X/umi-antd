/**
 * Description: 路由
 * Author: APIS
 * @param {Array || string} auth 页面路由权限code
 */

export default [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/Index',
        auth: '',
      },
      {component: '@/pages/404'},
    ],
  },
];
