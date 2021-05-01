export default [
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      {
        path: '/home',
        component: '@/pages/Index',
      },
    ],
  },
  {component: '@/pages/404'},
];
