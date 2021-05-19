import app from './app';

const getRoutes = (routes, maps = {}) => {
  routes = routes.map((item) => {
    if (item.auth) {
      maps[item.path] = item.auth;
    }
    if (item.routes) {
      item.routes = getRoutes(item.routes, maps).routes;
    }
    return item;
  });
  routes.push({
    component: '@/pages/404',
  });
  return {
    routes,
    maps,
  };
};

const {routes, maps} = getRoutes(app);

export const authMaps = maps;

export default routes;
