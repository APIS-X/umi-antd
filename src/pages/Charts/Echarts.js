import React, {memo, PureComponent, useEffect} from 'react';
import {message, Card, Button, Modal, Form, Input} from 'antd';

import ModCard from '@/components/ModCard';
import {Pie} from '@/components/charts/Echarts';

const FormItem = Form.Item;

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataPie: {
        name: '标签命中详情',
        position: 'left',
        type: 'pie',
        value: [
          {
            count: '46',
            name: '经营异常',
            ratio: '21%',
          },
          {
            count: '30',
            name: '纳税风险',
            ratio: '13.7%',
          },
          {
            count: '28',
            name: '工商变更风险',
            ratio: '12.8%',
          },
          {
            count: '16',
            name: '企业失信',
            ratio: '7.3%',
          },
          {
            count: '14',
            name: '企业涉诉',
            ratio: '6.4%',
          },
          {
            count: '85',
            name: '其他',
            ratio: '38.8%',
          },
        ],
      },
    };
  }

  componentDidMount() {}

  render() {
    const {dataPie} = this.state;
    return (
      <ModCard title="Echarts">
        <Pie data={dataPie} />
      </ModCard>
    );
  }
}

export default Main;
