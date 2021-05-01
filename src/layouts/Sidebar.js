import React, {useState} from 'react';
import {Link} from 'umi';
import {Layout, Menu} from 'antd';

import settings from '@/settings';
import {WalletOutlined} from '@/constants/icons';

import logo from '@/assets/images/logo.png';

const {Sider} = Layout;
const {SubMenu} = Menu;

const {title} = settings;

const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      width={240}
    >
      <div className="logo">
        <img src={logo} />
        <span>{title}</span>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<WalletOutlined />}>
          <Link to="/">数据同步</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};
export default React.memo(Sidebar);
