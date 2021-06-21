import React, {useState, useEffect} from 'react';
import {Link} from 'umi';
import {Layout, Menu} from 'antd';

import {regUrl} from '@/constants/reg';
import * as icons from '@/constants/icons';
import settings from '@/settings';
import {getMenuTransform} from '@/utils/index';

import logo from '@/assets/images/logo.png';

const {Sider} = Layout;
const {SubMenu, Item: MenuItem} = Menu;

const {title, sidebarWidth = 220} = settings;

// 拼装菜单Dom
const renderMenus = (menus = []) => {
  const getItemMenu = (menu = [], index = [0]) => {
    return menu.map(({name, code, type, icon, url = '', children = []}, i) => {
      const IconMenu = icons[icon];
      const key = code;
      if (children.length) {
        return (
          <SubMenu key={key} icon={icon && <IconMenu />} title={name}>
            <>{getItemMenu(children, [...index, i])}</>
          </SubMenu>
        );
      } else {
        return (
          <MenuItem key={key} icon={icon && <IconMenu />}>
            {regUrl.test(url) ? (
              <a href={url} target="_blank">
                {name}
              </a>
            ) : (
              <Link to={url}>{name}</Link>
            )}
          </MenuItem>
        );
      }
    });
  };

  const itemMenu = getItemMenu(menus);
  return itemMenu;
};

const Sidebar = ({dataMenus = []}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const path = location.pathname;
    const {menuMaps} = getMenuTransform(dataMenus);
    const openKeys = menuMaps[path] ? menuMaps[path].slice(0, -1) : [];
    const selectedKeys = menuMaps[path] ? menuMaps[path].slice(-1) : [];

    setOpenKeys(openKeys);
    setSelectedKeys(selectedKeys);
  }, [location.pathname]);

  const onOpenChange = (openKeys) => {
    openKeys = openKeys.length > 1 ? openKeys.slice(-1) : openKeys;
    setOpenKeys(openKeys);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      width={sidebarWidth}
    >
      <a className="logo" href="/">
        <img src={logo} />
        <span>{title}</span>
      </a>
      <Menu
        theme="dark"
        mode="inline"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        onOpenChange={onOpenChange}
      >
        {renderMenus(dataMenus)}
      </Menu>
    </Sider>
  );
};
export default Sidebar;
