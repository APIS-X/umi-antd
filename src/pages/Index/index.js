import React, {memo, PureComponent, useEffect} from 'react';
import {message, Card, Button, Modal} from 'antd';
import _ from 'lodash';

import ModCard from '@/components/ModCard';

import requests from '@/utils/request';
import api from '@/api';
import styles from './index.less';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  getData = async (url, fields, data, method) => {
    const res = await requests(url, {data}, method);
    // 接口数据处理...
  };

  render() {
    return <ModCard title="数据表关联">indexPage</ModCard>;
  }
}

export default Main;
