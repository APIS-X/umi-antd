import {axisPointer, colorAxis} from '../config';

export const optionDefault = {
  tooltip: {
    trigger: 'axis',
    show: true,
    className: 'echarts-tooltip',
  },
  axisPointer,
  legend: {
    top: 0,
    left: 0,
    orient: 'horizontal',
    icon: 'rect',
    itemWidth: 3,
    itemHeight: 48,
    itemStyle: {
      color: 'transparent',
    },
    textStyle: {
      width: 120,
      backgroundColor: 'transparent', //奇葩的bug，不设置背景色的话，宽度无效！！！
    },
    formatter: function (name) {
      return '';
    },
  },
  grid: {
    containLabel: true,
    top: 100,
    left: 40,
    right: 40,
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: [],
  },
  yAxis: {
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
    nameTextStyle: {
      align: 'right',
      padding: [0, 8, 0, 0],
      color: colorAxis,
    },
    axisPointer: {
      show: false,
    },
  },
  series: [
    {
      itemStyle: {
        normal: {
          lineStyle: {
            type: 'dashed', //'dotted'虚线 'solid'实线
          },
        },
      },
    },
  ],
  color: ['#39518A', '#2656F0', '#6788F4', '#9DB3F8', '#C9D5FB'],
};
