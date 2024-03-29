export const visualUnitList = [
  {
    label: '容器组件',
    key: 'Container',
    icon: 'BorderOutlined',
    children: [],
  },
  {
    label: '表单组件',
    key: 'Form',
    icon: 'FormOutlined',
    children: [
      {
        label: 'Text',
        key: 'Text',
        icon: 'FontSizeOutlined',
      },
      {
        label: 'Button',
        key: 'Button',
        icon: 'PicCenterOutlined',
      },
    ],
  },
  {
    label: '列表组件',
    key: 'List',
    icon: 'OrderedListOutlined',
    children: [
      {
        label: '数据摘要',
        key: '',
      },
    ],
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
  rowHeight: 150,
  margin: [5, 5],
  containerPadding: [0, 0],
  droppingItem: {
    w: 4,
    h: 1,
    i: 'abc',
  },
};

export default {
  siderWidth, // 组件模块展开的宽度
  siderCollapsedWidth, // 组件模块收起后的宽度
  visualUnitList, // 组件列表
  gridDefaults,
};
