// 菜单相关数据转换
export const getMenuTransform = (menus = []) => {
  let temps = {
    redirect: '',
    menuMaps: {},
  };
  const itemLoops = (menus = [], temps, codes = []) => {
    for (let i = 0, len = menus.length; i < len; i++) {
      const {type, url, code, children = []} = menus[i];
      if (type === 'menu' && url) {
        temps.menuMaps[url] = [...codes, code];
        !temps.redirect && (temps.redirect = url);
      }

      if (children.length) {
        temps = itemLoops(children, temps, [...codes, code]);
      }
    }
    return temps;
  };

  const menuTrans = itemLoops(menus, temps);
  return menuTrans;
};
