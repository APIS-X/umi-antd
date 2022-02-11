import {memo, useState, useEffect} from 'react';
import {Layout, Card, Collapse, Menu} from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  LayoutOutlined,
  FormOutlined,
  OrderedListOutlined,
  BarChartOutlined,
  PicCenterOutlined,
  FontSizeOutlined,
  BorderOutlined,
} from '@ant-design/icons';
import {arrayToObj} from '@/utils/tools';
import {visualUnitList, siderCollapsedWidth} from '../config';

import './index.less';

const {Sider} = Layout;
const {Panel} = Collapse;
const {Item: MenuItem} = Menu;

const mapUnits = {
  BorderOutlined: <BorderOutlined />,
  FormOutlined: <FormOutlined />,
  OrderedListOutlined: <OrderedListOutlined />,
  BarChartOutlined: <BarChartOutlined />,
  PicCenterOutlined: <PicCenterOutlined />,
  FontSizeOutlined: <FontSizeOutlined />,
};
const mapVisualUnitList = arrayToObj(visualUnitList, 'key');

const Template = ({collapsed = false, callbackCollapse}) => {
  const [activeKey, setActiveKey] = useState(visualUnitList[1].key);

  const getCollapseIcon = ({panelKey, isActive}) => {
    const icon = mapVisualUnitList[panelKey].icon;
    return mapUnits[icon] || <RightOutlined rotate={isActive ? 90 : 0} />;
  };
  const handleDrag = (e, key) => {
    console.log('e', e, key);
  };

  return (
    <>
      <Sider className="v-units" collapsed={collapsed} collapsedWidth={0} theme="light">
        <Card title="组件库" size="small" bordered={false}>
          <Collapse
            activeKey={activeKey}
            expandIcon={(current) => getCollapseIcon(current)}
            onChange={(keys) => setActiveKey(keys.pop())}
          >
            {visualUnitList.map(({label, key, children = []}) => {
              return (
                <Panel header={label} key={key}>
                  <ul className="unit-list">
                    {children.map(({label, key, icon}) => {
                      return (
                        <li
                          className="unit-item"
                          key={key}
                          draggable={true}
                          unselectable="on"
                          data-key={key}
                          // onDragStart={(e) => e.dataTransfer.setData('text/plain', '')}
                          onDragStart={(e) => handleDrag(e, key)}
                        >
                          {mapUnits[icon]}
                          <p>{label}</p>
                        </li>
                      );
                    })}
                  </ul>
                </Panel>
              );
            })}
          </Collapse>
        </Card>
      </Sider>
    </>
  );
};

export default memo(Template);
