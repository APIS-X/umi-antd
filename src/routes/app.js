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
        name: '首页',
        path: '/home',
        component: '@/pages/Index',
        auth: '',
      },
      {
        name: 'Charts',
        path: '/charts',
        routes: [
          {
            name: 'Echarts',
            path: '/charts/echarts',
            component: '@/pages/Charts/Echarts',
            auth: '',
          },
        ],
      },
      {
        name: 'Table',
        path: '/table',
        routes: [
          {
            name: 'TableList',
            path: '/table/list',
            component: '@/pages/Table/TableList',
            auth: '',
          },
          {
            name: 'TableCard',
            path: '/table/card',
            component: '@/pages/Table/TableCard',
            auth: '',
          },
        ],
      },
      {component: '@/pages/404'},
    ],
  },
];
