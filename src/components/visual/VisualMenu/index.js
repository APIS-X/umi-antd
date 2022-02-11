import {memo, useState} from 'react';
import {Layout, Menu} from 'antd';
import {
  HomeOutlined,
  DatabaseOutlined,
  LayoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';

const {Sider} = Layout;
const {Item: MenuItem} = Menu;

const Template = () => {
  const handleMenu = () => {};
  return (
    <Sider className="v-menu" collapsed={true} collapsedWidth={40}>
      {
        <Menu onClick={handleMenu}>
          <MenuItem key="list" title="返回列表">
            <HomeOutlined />
          </MenuItem>
          <MenuItem key="info" title="基本信息">
            <DatabaseOutlined />
          </MenuItem>
          <MenuItem key="layout" title="布局">
            <LayoutOutlined />
          </MenuItem>
        </Menu>
      }
      {
        <Menu onClick={handleMenu}>
          <MenuItem key="list" title="返回列表">
            <MenuFoldOutlined />
          </MenuItem>
        </Menu>
      }
    </Sider>
  );
};

export default memo(Template);
