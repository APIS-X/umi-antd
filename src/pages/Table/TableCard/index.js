import React, {memo, PureComponent, useEffect} from 'react';
import {message, Card, Button, Modal, Form, Input} from 'antd';

import ModCard from '@/components/ModCard';

const FormItem = Form.Item;

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <ModCard title="TableCard"></ModCard>;
  }
}

export default Main;
