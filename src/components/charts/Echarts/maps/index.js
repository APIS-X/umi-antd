import React from 'react';
import * as echarts from 'echarts/core';
import {MapChart, ScatterChart, EffectScatterChart} from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  GeoComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  MarkPointComponent,
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

import ReactEchart from '../reactEchart';
import {optionDefault} from './config';
import {getOptions} from '../utils';

import JsonMap from '@/components/charts/data/json/china.json';

echarts.use([
  MapChart,
  ScatterChart,
  EffectScatterChart,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  GeoComponent,
  VisualMapComponent,
  VisualMapContinuousComponent,
  VisualMapPiecewiseComponent,
  MarkPointComponent,
  CanvasRenderer,
]);
// 地图数据注入
echarts.registerMap('chartsMap', JsonMap);

const Template = (props) => {
  const {
    data,
    extra = {},
    options = {},
    style = {width: '100%', height: '450px'},
    ...others
  } = props;
  const params = {
    mode: 'map',
    data,
    extra,
    options,
    defaults: optionDefault,
  };
  const option = getOptions(params);

  return <ReactEchart echarts={echarts} mode="map" option={option} style={style} {...others} />;
};

export default React.memo(Template);
