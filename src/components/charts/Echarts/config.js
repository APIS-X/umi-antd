// 直角坐标系相关显示的色值
export const colorAxis = 'rgba(0,0,0,.45)';

// 直角坐标系Y轴公共设置
export const yAxis = {
  type: 'value',
  splitLine: {
    //网格线
    lineStyle: {
      type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
      color: '#E8E8E8',
    },
    show: true, //隐藏或显示
  },
  axisLabel: {
    color: colorAxis,
  },
};

// 直角坐标系Y轴数据间隔
export const splitNumber = 6;

// 鼠标hover的阴影
export const shadowStyle = {
  shadowBlur: 6,
  shadowColor: 'rgba(0, 0, 0, 0.6)',
};

// 直角坐标系指示器相关配置
export const axisPointer = {
  show: true,
  snap: true,
  label: {
    show: false,
  },
  lineStyle: {
    type: 'solid',
  },
  handle: {
    show: true,
    size: 0,
  },
};
