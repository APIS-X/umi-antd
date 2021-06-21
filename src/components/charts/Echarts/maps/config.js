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
    precision: 1,
    inRange: {
      color: ['#DFE6FD', '#2756F0'],
    },
    formatter: '{value}%',
  },
  geo: {
    map: 'china',
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
      map: 'china',
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
// 省份经纬度
export const dataProvinceMaps = {
  台湾: {name: '台湾', value: [121.509062, 25.044332]},
  河北: {name: '河北', value: [114.502461, 38.045474]},
  山西: {name: '山西', value: [112.549248, 37.857014]},
  内蒙古: {name: '内蒙古', value: [111.670801, 40.818311]},
  辽宁: {name: '辽宁', value: [123.429096, 41.796767]},
  吉林: {name: '吉林', value: [125.3245, 43.886841]},
  黑龙江: {name: '黑龙江', value: [126.642464, 45.756967]},
  江苏: {name: '江苏', value: [118.767413, 32.041544]},
  浙江: {name: '浙江', value: [120.153576, 30.287459]},
  安徽: {name: '安徽', value: [117.283042, 31.86119]},
  福建: {name: '福建', value: [119.306239, 26.075302]},
  江西: {name: '江西', value: [115.892151, 28.676493]},
  山东: {name: '山东', value: [117.000923, 36.675807]},
  河南: {name: '河南', value: [113.665412, 34.757975]},
  湖北: {name: '湖北', value: [114.298572, 30.584355]},
  湖南: {name: '湖南', value: [112.982279, 28.19409]},
  广东: {name: '广东', value: [113.280637, 23.125178]},
  广西: {name: '广西', value: [108.320004, 22.82402]},
  海南: {name: '海南', value: [110.33119, 20.031971]},
  四川: {name: '四川', value: [104.065735, 30.659462]},
  贵州: {name: '贵州', value: [106.713478, 26.578343]},
  云南: {name: '云南', value: [102.712251, 25.040609]},
  西藏: {name: '西藏', value: [91.132212, 29.660361]},
  陕西: {name: '陕西', value: [108.948024, 34.263161]},
  甘肃: {name: '甘肃', value: [103.823557, 36.058039]},
  青海: {name: '青海', value: [101.778916, 36.623178]},
  宁夏: {name: '宁夏', value: [106.278179, 38.46637]},
  新疆: {name: '新疆', value: [87.617733, 43.792818]},
  北京: {name: '北京', value: [116.405285, 39.904989]},
  天津: {name: '天津', value: [117.190182, 39.125596]},
  上海: {name: '上海', value: [121.472644, 31.231706]},
  重庆: {name: '重庆', value: [106.504962, 29.533155]},
  香港: {name: '香港', value: [114.173355, 22.320048]},
  澳门: {name: '澳门', value: [113.54909, 22.198951]},
};
