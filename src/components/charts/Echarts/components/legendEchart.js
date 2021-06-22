import React, {Fragment, useState, useEffect, useCallback, useRef} from 'react';

import ReactEchart from '../reactEchart';
import Legend from './legend';

import {getOptions} from '../utils';
import {formatThousandth} from '@/utils/tool';

const Template = (props) => {
  const {
    mode,
    data,
    options = {},
    extra = {},
    style = {width: '100%', height: '450px'},
    optionDefault,
    echarts,
    ...others
  } = props;

  const [option, setOption] = useState({});

  /************************************ 自定义图例相关Start ************************************/
  const [dataLegend, setDataLegend] = useState(); // 图例数据渲染
  const currentLegend = useRef(); // 暂存最新的图例显示数据

  // 鼠标hover坐标轴的时候设置自定义legend数据
  const getCustomLegendData = function (params, dataSeriesMaps) {
    if (params.length) {
      const {dataIndex, name} = params[0];

      let temps = {
        ...currentLegend.current,
      };
      temps.title = name;
      temps.data = currentLegend.current.data.map((item) => {
        const name = item.name;
        const {count, count_show, value, ratio} = dataSeriesMaps[name].value[dataIndex];
        return {
          name,
          value: count_show !== undefined ? count_show : formatThousandth(value || count),
          ratio,
          selected: item.selected,
        };
      });
      setDataLegend(temps);
    }
  };

  // 初始化自定义图例
  useEffect(() => {
    if (extra.axial_legendType === 'custom') {
      let temps = {
        title: '',
        data: [],
        type: extra.axial_lineType,
        color: option.color,
      };

      for (let i = 0, len = data.length; i < len; i++) {
        const pItem = data[i];
        if (pItem.value.length) {
          const {name, value, count, count_show, ratio} = pItem.value[pItem.value.length - 1];

          temps.title = name;
          temps.data.push({
            name: pItem.name,
            value: count_show !== undefined ? count_show : formatThousandth(value || count),
            ratio: ratio,
            selected: true,
          });
        }
      }
      setDataLegend(temps);
    }
  }, [option]);

  useEffect(() => {
    currentLegend.current = dataLegend;
  }, [dataLegend]);

  // 自定义图例toggle操作
  const onLegendselectchanged = useCallback((params) => {
    const temps = {...currentLegend.current};
    temps.data = temps.data.map((item) => {
      const selected = params.selected[item.name];
      item.selected = selected;

      return item;
    });
    setDataLegend(temps);
  }, []);
  const onEvents = {
    legendselectchanged: onLegendselectchanged,
  };
  /************************************ 自定义图例相关End ************************************/

  // 初始化图表数据
  useEffect(() => {
    const params = {
      mode,
      data,
      extra,
      options,
      defaults: optionDefault,
      getCustomLegendData,
    };
    setOption(getOptions(params));
  }, [props.data]);

  return (
    <Fragment>
      <ReactEchart
        echarts={echarts}
        mode={mode}
        option={option}
        style={style}
        onEvents={onEvents}
        {...others}
      >
        {extra.axial_legendType === 'custom' && <Legend {...dataLegend} />}
      </ReactEchart>
    </Fragment>
  );
};

export default React.memo(Template);
