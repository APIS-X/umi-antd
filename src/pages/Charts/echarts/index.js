import React, {useEffect} from 'react';
import ReactEcharts from 'echarts-for-react';
import * as echarts from 'echarts';

import styles from './style.less';

import JsonMaps from '@/components/charts/data/json/province/zhejiang.json';

echarts.registerMap('map', JsonMaps);

// console.log('JsonMaps', JsonMaps);

const shadowStyle = {
  shadowBlur: 6,
  shadowColor: 'rgba(0, 0, 0, 0.6)',
};
const colorScatter = '#298dff';

const dataMapList = JsonMaps.features.map((item) => {
  return {
    name: item.properties.name,
    value: +item.id,
  };
});

const optionDefault = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove',
    showDelay: 5,
    axisPointer: {
      type: 'shadow',
    },
    backgroundColor: 'rgba(0,0,0, .6)',
    borderWidth: 1,
    borderColor: '#08E1EB',
    padding: 10,
    textStyle: {
      color: '#FFF',
      fontSize: 14,
    },
    formatter: function (params) {
      const {name, value} = params.data;

      const renderItem = (data) => `<span style="font-size: 24px;color: #0bffff">${data}</span>`;
      const result = `${name}：${renderItem(value)}`;
      return result;
    },
  },
  series: [
    {
      type: 'map',
      map: 'map',
      roam: false,
      selectedMode: false,
      label: {
        normal: {
          show: false,
          color: '#FFF',
        },
        emphasis: {
          show: true,
          color: '#FFF',
        },
      },
      itemStyle: {
        borderColor: colorScatter,
        borderWidth: 1,
        areaColor: '#07479F',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#DFA170',
          ...shadowStyle,
        },
      },
      hoverAnimation: false,
      data: dataMapList,
    },
  ],
};

const MapProvince = ({...others}) => {
  return (
    <div className={styles['wrap-charts-maps']}>
      <ReactEcharts style={{height: '400px'}} option={optionDefault} theme="light" {...others} />
    </div>
  );
};

export default MapProvince;
