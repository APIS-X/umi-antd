/**
 * Description: 无数据组件
 * Author: APIS
 */
import React from 'react';
import {Empty} from 'antd';

import styles from './index.less';

const Template = ({text, ...others}) => {
  return (
    <div className="mod-nodata" {...others}>
      {text ? <span>{text}</span> : <Empty />}
    </div>
  );
};
export default Template;
