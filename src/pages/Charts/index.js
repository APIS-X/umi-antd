import React, {memo, PureComponent, useEffect} from 'react';
import {message, Card, Button, Modal, Form, Input} from 'antd';
import _ from 'lodash';

import ModCard from '@/components/ModCard';

import requests from '@/utils/request';
import api from '@/api';

const FormItem = Form.Item;

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <ModCard title="图表"></ModCard>;
  }
}

export default Main;
