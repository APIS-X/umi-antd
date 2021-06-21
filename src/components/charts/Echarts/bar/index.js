import React, {Fragment, useState, useEffect, useCallback, useRef} from 'react';
import * as echarts from 'echarts/core';
import {BarChart} from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  GraphicComponent,
  DatasetComponent,
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

import LegendEchart from '../components/LegendEchart';

import {optionDefault} from './config';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  GraphicComponent,
  LegendComponent,
  DatasetComponent,
  BarChart,
]);

const Template = (props) => {
  return <LegendEchart mode="bar" {...props} optionDefault={optionDefault} echarts={echarts} />;
};

export default React.memo(Template);
