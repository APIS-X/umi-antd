import {memo, useState, useEffect, useRef} from 'react';
import {Layout, Card, Collapse, Menu} from 'antd';
import {
  RightOutlined,
  LeftOutlined,
  LayoutOutlined,
  FormOutlined,
  BarChartOutlined,
} from '@ant-design/icons';

import {VisualGirds, VisualUnits} from '@/components/visual';
import logo from '@/assets/images/logo.png';
import './index.less';

const {Header, Content} = Layout;
const {Panel} = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Template = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [data, setData] = useState([
    {
      w: 4,
      h: 2,
      x: 4,
      y: 0,
      i: '1',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 8,
      y: 0,
      i: '2',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 0,
      y: 0,
      i: '3',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 4,
      y: 2,
      i: '4',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 8,
      y: 1,
      i: '5',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 0,
      y: 1,
      i: '6',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 8,
      y: 2,
      i: '7',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 0,
      y: 2,
      i: '8',
      moved: false,
      static: false,
    },
    {
      w: 4,
      h: 1,
      x: 0,
      y: 2,
      i: 'add',
      moved: false,
      static: false,
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
          <div className="v-editor">
            <Card title="编辑" bordered={false}>
              <Collapse defaultActiveKey={['1']}>
                <Panel header="容器组件" key="1">
                  <p>{text}</p>
                </Panel>
                <Panel header="表单组件" key="2">
                  <p>{text}</p>
                </Panel>
                <Panel header="列表组件" key="3">
                  <p>{text}</p>
                </Panel>
              </Collapse>
            </Card>
          </div>
        </Layout>
      </Layout>
    </>
  );
};

export default memo(Template);
