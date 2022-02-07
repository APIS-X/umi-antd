import {memo, useState, useEffect, useRef} from 'react';
import {Layout, Card} from 'antd';

import {VisualUnits, VisualGirds, VisualEditor} from '@/components/visual';
import logo from '@/assets/images/logo.png';
import './index.less';

const {Header, Content} = Layout;

const Template = () => {
  const [collapsed, setCollapsed] = useState(false); // 控制侧边栏收起

  const [data, setData] = useState([
    {
      id: '1',
      layouts: {
        w: 4,
        h: 2,
        x: 4,
        y: 0,
        i: '1',
        moved: false,
        static: false,
        resizeHandles: ['s', 'e', 'se'],
      },
    },
    {
      id: '2',
      layouts: {
        w: 4,
        h: 1,
        x: 8,
        y: 0,
        i: '2',
        moved: false,
        static: false,
      },
    },
    {
      id: '3',
      layouts: {
        w: 4,
        h: 1,
        x: 0,
        y: 0,
        i: '3',
        moved: false,
        static: false,
      },
    },
    {
      id: '4',
      layouts: {
        w: 4,
        h: 1,
        x: 4,
        y: 2,
        i: '4',
        moved: false,
        static: false,
      },
    },
    {
      id: '5',
      layouts: {
        w: 4,
        h: 1,
        x: 8,
        y: 1,
        i: '5',
        moved: false,
        static: false,
      },
    },
    {
      id: '6',
      layouts: {
        w: 4,
        h: 1,
        x: 0,
        y: 1,
        i: '6',
        moved: false,
        static: false,
      },
    },
    {
      id: '7',
      layouts: {
        w: 4,
        h: 1,
        x: 8,
        y: 2,
        i: '7',
        moved: false,
        static: false,
      },
    },
    {
      id: '8',
      layouts: {
        w: 4,
        h: 1,
        x: 0,
        y: 2,
        i: '8',
        moved: false,
        static: false,
      },
    },
  ]);

  return (
    <>
      <Layout className="mod-visual">
        <Header>
          <a className="logo" href="/">
            <img src={logo} />
          </a>
        </Header>
        <Layout className="ant-layout-has-sider">
          {/* 组件库 */}
          <VisualUnits collapsed={collapsed} callbackCollapse={setCollapsed} />
          {/* 栅格区域 */}
          <Content className="v-container">
            <VisualGirds collapsed={collapsed} data={data} />
          </Content>
          {/* 编辑区 */}
          <VisualEditor />
        </Layout>
      </Layout>
    </>
  );
};

export default memo(Template);
