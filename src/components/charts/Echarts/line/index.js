import React, {Fragment, useState, useEffect, useCallback, useRef} from 'react';
import * as echarts from 'echarts/core';
import {LineChart} from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
} from 'echarts/components';
import {CanvasRenderer} from 'echarts/renderers';

import LegendEchart from '../components/LegendEchart';

import {optionDefault} from './config';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  LineChart,
]);

const Template = (props) => {
  return <LegendEchart mode="line" {...props} optionDefault={optionDefault} echarts={echarts} />;
};

export default React.memo(Template);
