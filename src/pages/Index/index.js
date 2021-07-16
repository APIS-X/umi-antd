import React, {memo, useState, useEffect} from 'react';

import {Form, Button, Input} from 'antd';

import ModCard from '@/components/ModCard';
import Layer from '../../components/Layer';

const Template = (props) => {
  console.log('layer', Layer);
  Layer.show();

  return <ModCard title="首页"></ModCard>;
};

export default memo(Template);
