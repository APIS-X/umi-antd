import React, {useState, useEffect, useRef} from 'react';
import {WidthProvider, Responsive} from 'react-grid-layout';
import _ from 'lodash';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.less';

const ResponsiveReactGridLayout = Responsive;

const styleBtnRemove = {
  position: 'absolute',
  right: '2px',
  top: 0,
  cursor: 'pointer',
};

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Template = (props) => {
  const {data, defaults} = props;

  const refWrapGrid = useRef();

  const [settings, setSettings] = useState(
    defaults || {
      className: 'layout',
      breakpoints: {lg: 1000},
      cols: {lg: 12},
      // rowHeight = Math.floor(window.innerHeight / 3),
      rowHeight: 150,
      margin: [0, 0],
      containerPadding: [0, 0],
    },
  );
  const [newCounter, setNewCounter] = useState(0);
  const [dataColumns, setDataColumns] = useState(
    data || [
      {
        w: 4,
        h: 2,
        x: 4,
        y: 0,
        i: '1',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 8,
        y: 0,
        i: '2',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 0,
        y: 0,
        i: '3',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 4,
        y: 2,
        i: '4',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 8,
        y: 1,
        i: '5',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 0,
        y: 1,
        i: '6',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 8,
        y: 2,
        i: '7',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 0,
        y: 2,
        i: '8',
        moved: false,
        static: false,
      },
      {
        w: 4,
        h: 1,
        x: 0,
        y: 2,
        i: 'add',
        moved: false,
        static: false,
      },
    ],
  );

  const setModGridSize = () => {
    const domGrid = refWrapGrid.current;

    setTimeout(() => {
      setSettings({
        ...settings,
        width: domGrid.clientWidth,
      });
    });
  };

  useEffect(() => {
    window.addEventListener('resize', setModGridSize);
    setModGridSize();
    return () => window.removeEventListener('resize', setModGridSize);
  }, []);

  const onLayoutChange = (layout) => {
    console.log('layout', layout);
    // this.props.onLayoutChange(layout);
    // this.setState({layout: layout});
  };
  const onBreakpointChange = (breakpoint, cols) => {
    setSettings({
      ...settings,
      breakpoint,
      cols,
    });
  };

  const onAddItem = () => {
    console.log(
      'dataColumns',
      dataColumns.length,
      settings.cols,
      dataColumns.length * 4,
      settings.cols || 12,
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
            <span className="remove" style={styleBtnRemove} onClick={() => onRemoveItem(i)}>
              x
            </span>
          </>
        )}
      </div>
    );
  };
  return (
    <div className="wrap-grid" ref={refWrapGrid}>
      {settings.width && (
        <ResponsiveReactGridLayout
          onLayoutChange={onLayoutChange}
          onBreakpointChange={onBreakpointChange}
          {...settings}
        >
          {dataColumns.map((el) => createElement(el))}
        </ResponsiveReactGridLayout>
      )}
    </div>
  );
};

export default Template;
