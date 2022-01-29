export const visualUnitList = [
  {
    label: '容器组件',
    key: 'Container',
    icon: 'LayoutOutlined',
    children: [],
  },
  {
    label: '表单组件',
    key: 'Form',
    icon: 'FormOutlined',
    children: [],
  },
  {
    label: '列表组件',
    key: 'List',
    icon: 'OrderedListOutlined',
    children: [],
  },
  {
    label: '图表组件',
    key: 'Charts',
    icon: 'BarChartOutlined',
    children: [],
  },
];
export const siderWidth = 200;
export const siderCollapsedWidth = 30;
export const gridDefaults = {
  className: 'layout',
  breakpoints: {lg: 600},
  cols: {lg: 12},
  // rowHeight = Math.floor(window.innerHeight / 3),
  rowHeight: 100,
  margin: [5, 5],
  containerPadding: [0, 0],
};

export default {
  siderWidth, // 组件模块展开的宽度
  siderCollapsedWidth, // 组件模块收起后的宽度
  visualUnitList, // 组件列表
  gridDefaults,
};
