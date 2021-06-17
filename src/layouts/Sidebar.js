import React, {useState} from 'react';
import {Link} from 'umi';
import {Layout, Menu} from 'antd';

import settings from '@/settings';
import * as icons from '@/constants/icons';

import logo from '@/assets/images/logo.png';

const {Sider} = Layout;
const {SubMenu, Item: MenuItem} = Menu;

const {title} = settings;

const dataMenus = [
  {
    label: 'Navigation One',
    icon: 'MailOutlined',
    children: [
      {
        label: 'Option 1',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 2',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 3',
        url: 'http://www.baidu.com',
      },
    ],
  },
  {
    label: 'Navigation Two',
    icon: 'AppstoreOutlined',
    children: [
      {
        label: 'Option 1',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 2',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 3',
        url: 'http://www.baidu.com',
      },
    ],
  },
  {
    label: 'Navigation Three',
    icon: 'SettingOutlined',
    children: [
      {
        label: 'Option 1',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 2',
        url: 'http://www.baidu.com',
      },
      {
        label: 'Option 3',
        url: 'http://www.baidu.com',
      },
    ],
  },
];

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      width={220}
    >
      <div className="logo">
        <img src={logo} />
        <span>{title}</span>
      </div>
      <Menu defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline">
        {/* {
          dataMenus.map(pItem=> {
            <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <MenuItem key="1">Option 1</MenuItem>
          <MenuItem key="2">Option 2</MenuItem>
          <MenuItem key="3">Option 3</MenuItem>
          <MenuItem key="4">Option 4</MenuItem>
        </SubMenu>
          })
        } */}
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <MenuItem key="1">Option 1</MenuItem>
          <MenuItem key="2">Option 2</MenuItem>
          <MenuItem key="3">Option 3</MenuItem>
          <MenuItem key="4">Option 4</MenuItem>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <MenuItem key="5">Option 5</MenuItem>
          <MenuItem key="6">Option 6</MenuItem>
          <SubMenu key="sub3" title="Submenu">
            <MenuItem key="7">Option 7</MenuItem>
            <MenuItem key="8">Option 8</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <MenuItem key="9">Option 9</MenuItem>
          <MenuItem key="10">Option 10</MenuItem>
          <MenuItem key="11">Option 11</MenuItem>
          <MenuItem key="12">Option 12</MenuItem>
        </SubMenu>
      </Menu>
    </Sider>
  );
};
export default React.memo(Sidebar);
