import React, {useState} from 'react';
import {Link} from 'umi';
import {Layout, Menu} from 'antd';

import settings from '@/settings';
import {regUrl} from '@/constants/reg';
import * as icons from '@/constants/icons';

import logo from '@/assets/images/logo.png';

const {Sider} = Layout;
const {SubMenu, Item: MenuItem} = Menu;

const {title, sidebarWidth = 220} = settings;

const dataMenus = [
  {
    label: 'Navigation One',
    code: '',
    icon: 'MailOutlined',
    children: [
      {
        label: 'Option 1',
        code: '',
        url: 'http://www.baidu.com',
        children: [
          {
            label: 'Option 2',
            code: '',
            url: 'http://www.baidu.com',
          },
        ],
      },
      {
        label: 'Option 2',
        code: '',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 3',
        code: '',
        url: 'http://www.baidu.com',
      },
    ],
  },
  {
    label: 'Navigation Two',
    code: '',
    icon: 'AppstoreOutlined',
    children: [
      {
        label: 'Option 1',
        code: '',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 2',
        code: '',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 3',
        code: '',
        url: 'http://www.baidu.com',
      },
    ],
  },
  {
    label: 'Navigation Three',
    code: '',
    icon: 'SettingOutlined',
    children: [
      {
        label: 'Option 1',
        code: '',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 2',
        code: '',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 3',
        code: '',
        url: 'http://www.baidu.com',
      },
    ],
  },
];

const renderMenus = (menus) => {
  const getItemMenu = (menu = [], index = [0]) => {
    return menu.map(({label, code, type, icon, url = '', children = []}, i) => {
      const IconMenu = icons[icon];
      const key = code || `${index.join('_')}_${i}`;
      if (children.length) {
        return (
          <SubMenu key={key} icon={icon && <IconMenu />} title={label}>
            <>{getItemMenu(children, [...index, i])}</>
          </SubMenu>
        );
      } else {
        return (
          <MenuItem key={key}>
            {regUrl.test(url) ? (
              <a href={url} target="_blank">
                {label}
              </a>
            ) : (
              <Link to={url}>{label}</Link>
            )}
          </MenuItem>
        );
      }
    });
  };

  const itemMenu = getItemMenu(menus);
  return itemMenu;
};

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = useState([]);
  const [selectedKeys, setSelectedKeys] = useState([]);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      width={sidebarWidth}
    >
      <div className="logo">
        <img src={logo} />
        <span>{title}</span>
      </div>
      <Menu defaultSelectedKeys={[]} defaultOpenKeys={[]} mode="inline">
        {renderMenus(dataMenus)}
      </Menu>
    </Sider>
  );
};
export default React.memo(Sidebar);
