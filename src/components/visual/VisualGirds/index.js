import React, {useState, useEffect, useRef} from 'react';
import {WidthProvider, Responsive} from 'react-grid-layout';
import _ from 'lodash';

import {siderWidth, siderCollapsedWidth, gridDefaults} from '../config';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.less';

// 侧边栏收缩时gird宽度的增量
const incrementWidth = siderWidth - siderCollapsedWidth;

const ResponsiveReactGridLayout = Responsive;

const styleBtnRemove = {
  position: 'absolute',
  right: '2px',
  top: 0,
  cursor: 'pointer',
};

const Template = (props) => {
  const {data, defaults, collapsed} = props;

  const refWrapGrid = useRef();
  const [init, setInit] = useState(false);
  const [options, setOptions] = useState(defaults || gridDefaults);
  const [newCounter, setNewCounter] = useState(0);
  const [dataColumns, setDataColumns] = useState(data);

  const setModGridSize = () => {
    const clientWidth = refWrapGrid.current.clientWidth - 12; // 12为盒子左右的padding值
    console.log('domGrid.clientWidth', clientWidth, init, collapsed);
    setOptions({
      ...options,
      width: init ? clientWidth + +`${collapsed ? incrementWidth : -incrementWidth}` : clientWidth,
    });
    setTimeout(() => {});
  };

  useEffect(() => {
    if (!init) {
      window.addEventListener('resize', setModGridSize);
      setInit(true);
    }
    setModGridSize();
    return () => window.removeEventListener('resize', setModGridSize);
  }, [collapsed]);

  const onLayoutChange = (layout) => {
    console.log('layout', layout);
    // this.props.onLayoutChange(layout);
    // this.setState({layout: layout});
  };
  const onBreakpointChange = (breakpoint, cols) => {
    setOptions({
      ...options,
      breakpoint,
      cols,
    });
  };

  const onAddItem = () => {
    console.log(
      'dataColumns',
      dataColumns.length,
      options.cols,
      dataColumns.length * 4,
      options.cols || 12,
      (dataColumns.length * 4) % 12,
    );
    /*eslint no-console: 0*/
    setDataColumns(
      dataColumns.splice(dataColumns.length - 1, 0, {
        i: 'n' + newCounter,
        x: (dataColumns.length * 4 - 4) % 12,
        y: Infinity, // puts it at the bottom
        w: 4,
        h: 1,
      }),
    );
    setNewCounter(newCounter + 1);
  };

  const onRemoveItem = (i) => {
    console.log('removing', i);
    setDataColumns(_.reject(dataColumns, {i: i}));
  };

  const createElement = (el) => {
    const i = el.i;
    const isAdd = i === 'add';
    return (
      <div key={i} data-grid={el}>
        {isAdd ? (
          <span className="text" onClick={() => onAddItem()}>
            +
          </span>
        ) : (
          <>
            <span className="text">{i}</span>
            {/* <span className="remove" style={styleBtnRemove} onClick={() => onRemoveItem(i)}>
              x
            </span> */}
          </>
        )}
      </div>
    );
  };

  return (
    <div className="v-grid" ref={refWrapGrid}>
      {options.width && (
        <ResponsiveReactGridLayout
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakpointChange}
          {...options}
        >
          {dataColumns.map((el) => createElement(el))}
        </ResponsiveReactGridLayout>
      )}
    </div>
  );
};

export default Template;
