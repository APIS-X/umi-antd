import React from 'react';
import * as echarts from 'echarts/core';
import {PieChart} from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  GraphicComponent,
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

import ReactEchart from '../reactEchart';
import {optionDefault} from './config';
import {getOptions} from '../utils';

// 按需加载
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  LegendComponent,
  GraphicComponent,
  PieChart,
]);

const Template = (props) => {
  const {
    data,
    extra = {},
    options = {},
    style = {width: '100%', height: '410px'},
    ...others
  } = props;

  const params = {
    mode: 'pie',
    data,
    extra,
    options,
    defaults: optionDefault,
  };
  const option = getOptions(params);

  return <ReactEchart echarts={echarts} mode="pie" option={option} style={style} {...others} />;
};

export default React.memo(Template);
