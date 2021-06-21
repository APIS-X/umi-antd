import React, {memo, PureComponent, useEffect} from 'react';
import {message, Card, Button, Modal, Form, Input} from 'antd';
import _ from 'lodash';

import ModCard from '@/components/ModCard';
import SearchForm from '@/components/Form/Form';

import requests from '@/utils/request';
import api from '@/api';
import styles from './index.less';

const FormItem = Form.Item;

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.formRef = React.createRef();
  }

  componentDidMount() {}
  getData = async (url, fields, data, method) => {
    const res = await requests(url, {data}, method);
    // 接口数据处理...
  };

  onFinish = (values) => {
    console.log('values', values);
  };

  render() {
    return (
      <ModCard title="TableList">
        <SearchForm ref={this.formRef} onFinish={this.onFinish}>
          <FormItem label="姓名" name="name">
            <Input placeholder="请输入姓名" />
          </FormItem>
        </SearchForm>
      </ModCard>
    );
  }
}

export default Main;
