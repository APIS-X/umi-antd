import {axisPointer, colorAxis} from '../config';

export const optionDefault = {
  tooltip: {
    trigger: 'axis',
    show: true,
    axisPointer: {
      type: 'line',
    },
  },
  axisPointer,
  legend: {
    top: 0,
    left: 0,
    orient: 'horizontal',
    icon: 'rect',
    itemWidth: 3,
    itemHeight: 48,
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
    top: 40,
    left: 50,
    right: 40,
  },
  xAxis: {
    type: 'category',
    axisTick: {
      alignWithLabel: true,
    },
    axisLabel: {
      color: colorAxis,
    },
    axisLine: {
      lineStyle: {
        color: colorAxis,
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: colorAxis,
    },
    splitLine: {
      //网格线
      lineStyle: {
        type: 'dashed', //设置网格线类型 dotted：虚线   solid:实线
        color: '#E8E8E8',
      },
      show: true, //隐藏或显示
    },
    nameTextStyle: {
      align: 'right',
      padding: [0, 8, 0, 0],
      color: colorAxis,
    },
  },
  series: [],
  color: ['#A6D22A', '#F7C739', '#F36C6C', '#566B9B'],
};
