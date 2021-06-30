/**
 *  Author: APIS
 *  Description: 模块卡片，参数配置等参见ant - Card
 */
import React from 'react';
import {Card, Spin} from 'antd';

import styles from './index.less';

const ModCard = (props) => {
  const {loading = false, children, ...others} = props;

  return (
    <Card className="mod-card" bordered={false} {...others}>
      <Spin spinning={loading} />
      {children}
    </Card>
  );
};

export default React.memo(ModCard);
