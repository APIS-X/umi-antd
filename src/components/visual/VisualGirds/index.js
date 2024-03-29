import React, {useState, useEffect, useRef} from 'react';
import {Responsive as ResponsiveGridLayout} from 'react-grid-layout';
import _ from 'lodash';
import {CloseOutlined} from '@ant-design/icons';

import {siderWidth, siderCollapsedWidth, gridDefaults} from '../config';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.less';

// 侧边栏收缩时gird宽度的增量
const incrementWidth = siderWidth - siderCollapsedWidth;

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
  const [dataColumns, setDataColumns] = useState(data);
  const [currentLayout, setCurrentLayout] = useState([]);

  const setModGridSize = () => {
    const clientWidth = refWrapGrid.current.clientWidth - 12; // 12为盒子左右的padding值
    setOptions({
      ...options,
      width: init ? clientWidth + +`${collapsed ? incrementWidth : -incrementWidth}` : clientWidth,
    });
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
    setCurrentLayout(layout);

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
  const onDrop = (layout, layoutItem, _event) => {
    // setDataColumns()
    console.log('layoutItem', layout, layoutItem, _event);
    const temps = currentLayout.map(({i, w, h, x, y}, index) => {
      const isDrop = i === '__dropping-elem__';
      const id = isDrop ? `drop_${i}` : i + '';
      return {
        id,
        layouts: {
          w: w,
          h,
          x,
          y,
          i,
          moved: false,
        },
      };
    });
    setDataColumns(temps);
  };

  const onRemoveItem = (i) => {
    console.log('removing', i);
    setDataColumns(_.reject(dataColumns, {i: i}));
  };

  const generateDOM = () => {
    console.log('dataCol', dataColumns);
    return dataColumns.map(({id, layouts}) => {
      const {i, w, h, x, y} = layouts;
      return (
        <div key={`${i}`} data-grid={layouts}>
          <span className="text">{id}</span>
          <span className="remove" style={styleBtnRemove} onClick={() => onRemoveItem(i)}>
            <CloseOutlined />
          </span>
        </div>
      );
    });
  };

  return (
    <div className="v-grid" ref={refWrapGrid}>
      {options.width && (
        <ResponsiveGridLayout
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakpointChange}
          onDrop={onDrop}
          isDroppable={true}
          {...options}
        >
          {generateDOM()}
        </ResponsiveGridLayout>
      )}
    </div>
  );
};

export default React.memo(Template);
