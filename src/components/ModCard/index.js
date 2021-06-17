/**
 * 模块卡片
 */
import React from 'react';
import {Card} from 'antd';

const ModCard = (props) => {
  const {children, ...others} = props;

  return (
    <Card bordered={false} {...others}>
      {children}
    </Card>
  );
};

export default React.memo(ModCard);
