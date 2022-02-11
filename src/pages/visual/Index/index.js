import {memo, useState, useEffect, useRef} from 'react';
import {Layout, Card} from 'antd';

import {
  VisualMenu,
  VisualHandler,
  VisualUnits,
  VisualGirds,
  VisualEditor,
} from '@/components/visual';
import './index.less';

const {Header, Sider, Content, Footer} = Layout;

const Template = () => {
  const [collapsed, setCollapsed] = useState(false); // 控制侧边栏收起

  return (
    <Layout className="v-layout">
      <VisualMenu />
      <Layout>
        <VisualHandler />
        <Layout>
          <VisualUnits collapsed={collapsed} callbackCollapse={setCollapsed} />

          <Layout>
            <Content className="v-container"></Content>
            <Footer className="v-path"></Footer>
          </Layout>
        </Layout>
      </Layout>
      <Sider width={300} className="v-editor"></Sider>
    </Layout>
  );
};

export default memo(Template);
