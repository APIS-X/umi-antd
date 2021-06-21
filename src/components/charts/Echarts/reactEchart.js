/**
 * Description: echarts-for-react组件二次封装核心文件，可以直接引用
 */

import React, {Fragment, useState, useEffect, useRef, useCallback} from 'react';
import ReactEChartsCore from 'echarts-for-react/lib/core';

import NoData from '@/components/NoData';

import styles from './style.less';

const ReactEchart = (props) => {
  const {
    echarts,
    mode,
    option = {},
    notMerge = false,
    lazyUpdate = false,
    theme = 'theme_name',
    style = {width: '100%', height: '450px'},
    children,
    showNoData = true,
    ...others
  } = props;
  const chartRef = useRef();
  const [initial, setInitial] = useState(false);
  const [noData, setNoData] = useState(false);

  const checkNoData = (mode, option) => {
    let noData = false;

    switch (mode) {
      case 'line': {
        if (option.xAxis && !option.xAxis[0].data.length) {
          noData = true;
        }
        break;
      }
      case 'bar': {
        if (option.xAxis && !option.xAxis[0].data.length) {
          noData = true;
        }
        break;
      }
      case 'pie': {
        if (!option.series[0].data.length) {
          noData = true;
        }
        break;
      }
      case 'map': {
        if (!option.series[0].data.length) {
          noData = true;
        }
        break;
      }
    }

    return noData;
  };

  useEffect(() => {
    // 判断数据是否初始化
    if (!initial) {
      setInitial(true);
    }
    // 检查是否无数据
    setNoData(checkNoData(mode, option));

    // 修复echarts-for-react关于图表渲染动画无效的Bug
    // if (option && chartRef.current && chartRef.current.getEchartsInstance) {
    //   const chartInstance = chartRef.current.getEchartsInstance()

    //   setTimeout(() => {
    //     chartInstance.clear()
    //     chartInstance.setOption(option)
    //   }, 100)
    // }
  }, [option]);

  return (
    <div className="mod-charts">
      {showNoData && initial && noData ? (
        <NoData style={style} />
      ) : (
        <Fragment>
          {children}
          <ReactEChartsCore
            echarts={echarts}
            ref={chartRef}
            option={option}
            notMerge={notMerge}
            lazyUpdate={lazyUpdate}
            theme={theme}
            style={style}
            {...others}
          />
        </Fragment>
      )}
    </div>
  );
};

export default React.memo(ReactEchart);
