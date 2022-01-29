import {memo, useState, useEffect} from 'react';
import {Layout, Card, Collapse, Menu} from 'antd';
import {
  LeftOutlined,
  LayoutOutlined,
  FormOutlined,
  OrderedListOutlined,
  BarChartOutlined,
} from '@ant-design/icons';
import {visualUnitList, siderCollapsedWidth} from '../config';
import './index.less';

const {Sider} = Layout;
const {Panel} = Collapse;
const {Item: MenuItem} = Menu;

const mapUnits = {
  LayoutOutlined: <LayoutOutlined />,
  FormOutlined: <FormOutlined />,
  OrderedListOutlined: <OrderedListOutlined />,
  BarChartOutlined: <BarChartOutlined />,
};

const Template = ({collapsed, callbackCollapse}) => {
  const [activeKey, setActiveKey] = useState(visualUnitList[0].key);

  const handleMenu = ({key}) => {
    callbackCollapse(false);
    setTimeout(() => {
      setActiveKey(key);
    });
  };

  return (
    <>
      <Sider
        className="v-units"
        collapsed={collapsed}
        collapsedWidth={siderCollapsedWidth}
        theme="light"
      >
        {collapsed ? (
          <Menu onClick={handleMenu}>
            {visualUnitList.map(({label, key, icon}) => {
              return (
                <MenuItem key={key} title={label}>
                  {mapUnits[icon]}
                </MenuItem>
              );
            })}
          </Menu>
        ) : (
          <Card
            title="组件库"
            bordered={false}
            extra={
              <span className="trigger" onClick={() => callbackCollapse(true)}>
                <LeftOutlined />
              </span>
            }
          >
            <Collapse activeKey={activeKey} onChange={(keys) => setActiveKey(keys.pop())}>
              {visualUnitList.map(({label, key, children}) => {
                return (
                  <Panel header={label} key={key}>
                    <p>{label}</p>
                  </Panel>
                );
              })}
            </Collapse>
          </Card>
        )}
      </Sider>
    </>
  );
};

export default memo(Template);
