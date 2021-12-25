import {shadowStyle} from '../config';
const colorScatter = '#FFF';

export const optionDefault = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    showDelay: 5,
    axisPointer: {
      type: 'shadow',
    },
    backgroundColor: 'rgba(0,0,0, .6)',
    borderWidth: 0,
    textStyle: {
      color: '#FFF',
    },
  },
  visualMap: {
    type: 'continuous',
    min: 0,
    max: 6000,
    top: 40,
    // orient: 'horizontal',
    text: ['高', '低'], // 文本，默认为数值文本
    precision: 2,
    inRange: {
      color: ['#DFE6FD', '#2756F0'],
    },
    formatter: '{value}',
  },
  geo: {
    map: 'chartsMap',
    zoom: 1,
    center: [105, 36],
    roam: false, // 一定要关闭拖拽
    label: {
      show: false,
    },
    itemStyle: {
      normal: {
        borderWidth: 1,
        borderColor: colorScatter,
      },
      emphasis: {
        show: false,
      },
    },
    emphasis: {
      label: {
        show: false,
      },
    },
  },
  series: [
    {
      type: 'map',
      map: 'chartsMap',
      roam: false,

      center: [105, 36],
      selectedMode: false,
      label: {
        normal: {
          show: false,
          color: 'rgba(0,0,0, .4)',
        },
        emphasis: {
          show: false,
        },
      },
      itemStyle: {
        borderColor: colorScatter,
      },
      emphasis: {
        itemStyle: {
          areaColor: '#466FF2',
          ...shadowStyle,
        },
      },
      hoverAnimation: false,
    },
  ],
};

// 默认散点数据配置
export const optionMapsEffectScatter = {
  type: 'effectScatter',
  coordinateSystem: 'geo',
  showEffectOn: 'render',
  rippleEffect: {
    brushType: 'stroke',
    period: 4,
    scale: 3,
  },
  hoverAnimation: true,
  label: {
    normal: {
      formatter: '{b}',
      position: 'right',
      show: false,
    },
    emphasis: {
      show: false,
    },
  },
  itemStyle: {
    normal: {
      color: colorScatter,
      borderColor: colorScatter,
    },
    emphasis: {
      show: false,
    },
  },
  symbolSize: 8,
};
