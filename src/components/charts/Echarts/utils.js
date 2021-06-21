import _ from 'lodash';
import {formatThousandth} from '@/utils';

import {yAxis, splitNumber, shadowStyle, colorAxis} from './config';
import {optionMapsEffectScatter, dataProvinceMaps} from './maps/config';

/**
 * 数据类型判断
 * @param {*} data
 */
export const checkType = (data) => {
  return Object.prototype.toString.call(data).replace('[object ', '').replace(']', '');
};

/**
 * _.mergeWith扩展定制合并方法, 源对象和目标对象的属性值如果一个是数组一个是对象，则将对象作为数组的第一项进行合并
 */
export const customizer = (objValue, srcValue, key, object, source, stack) => {
  if (checkType(srcValue) === 'Object' && checkType(objValue) === 'Array') {
    return _.mergeWith({}, {__key: objValue}, {__key: [srcValue]}).__key;
  } else if (checkType(srcValue) === 'Array' && checkType(objValue) === 'Object') {
    return _.mergeWith({}, {__key: [objValue]}, {__key: srcValue}).__key;
  } else {
    return _.mergeWith({}, {__key: objValue}, {__key: srcValue}).__key;
  }
};

/**
 * 设置X轴数据间隔
 * @param {*} dataXAxis X轴数据数组
 * 规则：12条以下数据X轴label按照组件默认显示；11条以上数据X轴label的影藏规则：数据条数/10，若余数为0、1、2、3、4，横坐标共展示11条数据；若余数为5、6、7、8、9，横坐标共展示10条数据
 */
export const setXAxisLabelInterval = (dataXAxis) => {
  const len = dataXAxis.length;
  let interval = 0;
  if (len < 12) {
    interval = 'auto';
  } else {
    interval = Math.round(len / 10) - 1;
  }

  return interval;
};

/**
 * 设置直角坐标轴刻度间隔(直角坐标系)
 * @param {*} dataValueMaps
 * @param {*} splitNumber
 * @param {*} isStack
 * @param {*} currentStack
 * @returns
 */
export const setYAxisMax = (dataValueMaps, splitNumber, isStack, currentStack) => {
  let max = 0;
  let interval = 0;
  const maxList = Object.values(dataValueMaps).map((item) => {
    const maxCurrent = item
      .filter((k) => k.stack === currentStack && k.count !== '-')
      .map((m) => +m.count);
    return isStack ? _.sum(maxCurrent) : _.max(maxCurrent);
  });
  max = _.ceil(_.max(maxList) / splitNumber);
  interval = _.ceil(max, -(max.toString().length - 1));
  return {
    max: interval * splitNumber,
    interval,
  };
};

/**
 * 设置地图散点大小
 * @param {Array} data
 * @param {*} min
 * @param {*} max
 */
export const setSymbolLimits = (data = [], max = 10) => {
  const dataMax = _.max(data.map((item) => item.value));
  return {
    dataMax,
    symbolStep: max / dataMax,
  };
};

/**
 * 获取数据map，用于格式化label、legend、tooltip得显示性数据的处理
 * @param {String} mode 数据对应的组件类型
 * @param {Object || String} data
 * @param {String} field  map的key
 */
export const getDataFormatterMaps = (mode, data, field = 'name') => {
  let dataValueMaps = {};
  let dataSeriesMaps = {};
  switch (mode) {
    case 'bar': {
    }
    case 'line': {
      for (let i = 0, lenI = data.length; i < lenI; i++) {
        const {value = [], name, yname = '--', ...others} = data[i];
        const pItem = value;

        for (let j = 0, lenJ = pItem.length; j < lenJ; j++) {
          const itemValue = pItem[j][field];
          dataValueMaps[itemValue] = dataValueMaps[itemValue] || [];
          dataValueMaps[itemValue].push({
            ...pItem[j],
            ...others,
            name,
            stack: yname,
          });
        }
        dataSeriesMaps[name] = data[i];
      }
      break;
    }
  }

  return {
    dataValueMaps,
    dataSeriesMaps,
  };
};

/**
 * 线图、柱状图等相关数据处理
 * @param {String} mode 数据对应的组件类型
 * @param {Object || String} data
 * @param {Object} extra  自定义参数
 * @returns
 */
export const getAxialValues = (mode, data, extra, dataValueMaps) => {
  let dataXAxis = [];
  let dataYAxis = [];
  let dataSeries = [];
  let dataLegend = [];
  let currentYAxis = [];

  const {
    axial_stack = true, //数据是否堆叠，默认堆叠
    bar_direction,
    bar_showLabel = false,
    xAxis_intervalDisabled = false,
    xAxis_labelFormatter,
  } = extra;
  const isBarVertical = bar_direction === 'vertical';

  for (let i = 0, lenI = data.length; i < lenI; i++) {
    const {name, type, unit, value = [], yname = '--'} = data[i];
    let itemSeriesData = [];

    dataLegend.push(name);

    for (let j = 0, lenJ = value.length; j < lenJ; j++) {
      const {name = '', count} = value[j];

      !i && dataXAxis.push(name);
      if (checkType(count) === 'Array') {
        itemSeriesData = [...itemSeriesData, ...count];
      } else {
        itemSeriesData.push(count);
      }
    }

    if (!currentYAxis.includes(yname)) {
      dataYAxis.push({
        ...yAxis,
        splitNumber,
        nameTextStyle: {
          align: dataYAxis.length ? 'left' : 'right',
          padding: dataYAxis.length ? [0, 0, 0, 8] : [0, 8, 0, 0],
          color: colorAxis,
        },
        axisPointer: {
          show: false,
        },
        min: 0,
        ...setYAxisMax(dataValueMaps, splitNumber - 1, axial_stack, yname),
        name: `${yname}`,
      });
      currentYAxis.push(yname);
    }

    let itemSeries = {
      name,
      type,
      stack: axial_stack ? yname : undefined,
      data: itemSeriesData,
      emphasis: {
        focus: 'series',
      },
      showSymbol: false, // 只在hover的时候显示标记图形
      itemStyle: {
        normal: {
          lineStyle: {
            width: 1,
          },
        },
      },
    };

    if (mode === 'bar') {
      itemSeries = {
        ...itemSeries,
        barMaxWidth: 32,
        emphasis: {
          itemStyle: {
            ...shadowStyle,
          },
        },
      };
      if (bar_showLabel) {
        itemSeries.label = {
          show: true,
          position: 'top',
          formatter: function (params) {
            const {name, seriesIndex, dataIndex} = params;
            const {count, ratio, count_show} = dataValueMaps[name][seriesIndex];
            const value = count_show !== undefined ? count_show : formatThousandth(count);
            return [`{a|${value}}`, `{b|${ratio}}`].join('\n');
          },
          rich: {
            a: {
              color: 'rgba(0,0,0,.65)',
              fontSize: 14,
              fontFamily: 'PingFangSC-Regular',
              align: 'center',
              lineHeight: 18,
            },
            b: {
              color: '#2656F0',
              fontSize: 14,
              fontFamily: 'Helvetica',
              align: 'center',
              lineHeight: 18,
            },
          },
        };
      }
      if (type === 'line') {
        itemSeries.yAxisIndex = 1;
      }
    }

    dataSeries.push(itemSeries);
  }

  return {
    legend: {
      data: dataLegend,
      show: dataLegend.length > 1,
    },
    xAxis: isBarVertical
      ? dataYAxis
      : [
          {
            type: 'category',
            data: dataXAxis,
            axisLabel: {
              interval: xAxis_intervalDisabled ? 0 : setXAxisLabelInterval(dataXAxis),
              formatter: function (params) {
                if (xAxis_labelFormatter === 'YY/MM') {
                  return params.replace(/^(\d{2})(\d{2})(\/\d{2})/g, '$2$3');
                } else if (xAxis_labelFormatter === 'MM/DD') {
                  return params.replace(/^(\d{4}\/)(\d{2})(\/\d{2})/g, '$2$3');
                } else if (checkType(xAxis_labelFormatter) === 'Function') {
                  return xAxis_labelFormatter(params);
                } else {
                  return params;
                }
              },
            },
          },
        ],
    yAxis: isBarVertical ? [{type: 'category', data: dataXAxis}] : dataYAxis,
    series: dataSeries,
  };
};

// 接口返回的数据格式转换
export const dataTransform = (data = []) => {
  data = data.map((k) => {
    k.value = k.value || [];
    k.value = k.value.map((t) => {
      t.count_show = t.count;
      t.count = +t.count.replace(/,|-/gi, '');
      return t;
    });
    return k;
  });
  return data;
};

/**
 * 获取Echarts所需的Options数据结构
 * @param {String} mode 组件类型
 * @param {Object | Array} data 数据集
 * @param {Object} defaults 图表默认配置参数
 * @param {Object} options 图表配置参数
 * @returns
 */
export const getOptions = ({
  mode,
  data,
  defaults,
  extra = {},
  options = {},
  getCustomLegendData,
}) => {
  let opts;
  let temps = {};
  const isCustomLegend = extra.axial_legendType === 'custom';

  if (data) {
    switch (mode) {
      case 'pie': {
        data = data || {};

        const {value = []} = data;
        const {pie_radius} = extra;

        // series
        const dataSeries = value
          .map((item) => {
            const {name, ratio, count} = item;
            return {
              name,
              value: count.replace(/,/g, ''),
              label: {
                formatter: function (params) {
                  return ['{c|\n}', `{a|${name}}`, `{b|${count} | ${ratio}}`, '{c|\n}'].join('\n');
                },
              },
            };
          })
          .filter((k) => k.value != 0); // 过滤为0的数据
        temps.series = [
          {
            radius: pie_radius,
            data: dataSeries,
          },
        ];

        break;
      }
      case 'bar': {
        data = dataTransform(data || []);

        const {dataValueMaps, dataSeriesMaps} = getDataFormatterMaps(mode, data);
        temps = getAxialValues(mode, data, extra, dataValueMaps);
        temps.tooltip = {
          formatter: function (params, ticket, callback) {
            // 外抛自定义legend显示数据
            if (isCustomLegend) {
              getCustomLegendData(params, dataSeriesMaps);
            }

            let result = ``;
            return result;
          },
        };
        if (isCustomLegend) {
          temps.grid = {
            top: 120,
          };
        }
        break;
      }
      case 'line': {
        data = dataTransform(data || []);

        const {dataValueMaps, dataSeriesMaps} = getDataFormatterMaps(mode, data);
        temps = getAxialValues(mode, data, extra, dataValueMaps);

        temps.tooltip = {
          formatter: function (params, ticket, callback) {
            // 外抛自定义legend显示数据
            if (isCustomLegend) {
              getCustomLegendData(params, dataSeriesMaps);
            }

            let result = ``;
            params.forEach((item, index) => {
              const {marker, name, seriesName, value} = item;
              const unit = dataSeriesMaps[seriesName] ? dataSeriesMaps[seriesName].unit || '' : '';

              !index && (result += `<b>${name}</b></br>`);
              const radio =
                dataValueMaps[name] && dataValueMaps[name][index]
                  ? `${dataValueMaps[name][index].ratio}`
                  : '';
              result += `${marker} ${seriesName}: &nbsp;&nbsp;&nbsp;${value}${unit}&nbsp;&nbsp;&nbsp;${radio} </br>`;
            });
            return result;
          },
        };
        break;
      }
      case 'map': {
        let {name, data: dataArea} = data;
        dataArea = dataArea || [];
        let seriesMapData = [];
        let seriesEffectScatterData = [];
        // 设置散点半径步长
        const {dataMax, symbolStep} = setSymbolLimits(dataArea);
        const {map_showEffectScatter = false} = extra;

        for (let i = 0, len = dataArea.length; i < len; i++) {
          const item = dataArea[i];
          const {name, value = 0, ...others} = item;

          seriesMapData.push({
            name,
            value,
          });
          if (dataProvinceMaps[name]) {
            seriesEffectScatterData.push({
              name,
              value: [...dataProvinceMaps[name].value, value],
              ...others,
              visualMap: false,
            });
          }
        }

        temps = {
          tooltip: {
            formatter: function (params) {
              const {name, value} = params;
              const showValue = Array.isArray(value) ? value[2] : value;
              const result = `${name}&nbsp;&nbsp;${showValue ? `${showValue}%` : '0.0%'}`;
              return result;
            },
          },
          visualMap: {
            max: dataMax,
          },
          series: [{name, data: seriesMapData}],
        };

        // 区域打点处理
        if (map_showEffectScatter) {
          temps.series.push({
            name,
            data: seriesEffectScatterData,
            ...optionMapsEffectScatter,
            symbolSize: (val) => {
              return symbolStep * val[2];
            },
          });
        }
        break;
      }
      default: {
      }
    }
  }

  opts = _.mergeWith({}, defaults, temps, options, customizer);
  return opts;
};
