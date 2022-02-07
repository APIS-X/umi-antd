import {memo, useState, useEffect} from 'react';
import {Layout, Card, Collapse, Menu} from 'antd';

const Template = () => {
  return (
    <div className="v-editor">
      <Card title="编辑" bordered={false}></Card>
    </div>
  );
};

export default memo(Template);
