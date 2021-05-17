import React, {memo, PureComponent, useEffect} from 'react';

import {message, Card, Button, Modal} from 'antd';

import SearchForm from './components/SearchForm';
import ModTableList from './components/ModTableList';
import ModalDrawer from './components/ModalDrawer';

import requests from '@/utils/request';
import api from '@/api';
import {dataList, dataSelectSheet_E10, dataSelectSheet_SAP} from '@mock';
import styles from './index.less';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList: dataList,
      dataSelectSheet_E10: [],
      dataSelectSheet_SAP: [],
      dataModal: {
        visible: false,
      },
    };
  }

  componentDidMount() {
    // 获取关联列表数据
    // this.getData(api.getTableInfo, 'dataList');
    // 获取E10列表
    this.getData(api.getTableList, 'dataSelectSheet_E10', {tabletype: 1});
    // 获取SAP列表
    this.getData(api.getTableList, 'dataSelectSheet_SAP', {tabletype: 2});
  }
  getData = async (url, fields, data, method) => {
    const res = await requests(url, {data}, method);
    this.setState({[fields]: res});
  };

  handleFunc = async (type, params) => {
    switch (type) {
      case 'ADD': {
      }
      case 'UPDATE': {
        this.setState({
          dataModal: {
            visible: true,
            modalData: {
              status: type,
              ...params,
            },
          },
        });
        break;
      }
      case 'UPDATE_ITEM': {
        break;
      }
      case 'DELETE': {
        Modal.confirm({
          title: '确定删除当前关联关系吗?',
          okText: '确认',
          cancelText: '取消',
          async onOk() {
            // const data = await requests(api.deleteTableInfo, params);
            // if (data) {
            //   message.success('删除成功！');
            // }
            message.success('删除成功！');
          },
        });
        break;
      }
      case 'SUBMIT': {
        console.log('params', params);
        const data = requests(api.updateTableInfo, params);
        if (data) {
          message.success('操作成功!');
        }
        break;
      }
      case 'CLOSE': {
        this.setState({
          dataModal: {
            visible: false,
            modalData: undefined,
          },
        });
        break;
      }
    }
  };

  render() {
    const {dataList, dataSelectSheet_E10, dataSelectSheet_SAP, dataModal} = this.state;

    const dataSearch = {
      dataSelectSheet_E10,
    };

    return (
      <Card
        title="数据表关联"
        size="small"
        bordered={false}
        extra={
          <Button type="primary" onClick={() => this.handleFunc('ADD')}>
            新增
          </Button>
        }
      >
        <SearchForm data={dataSearch} />
        <ModTableList dataSource={dataList} handleFunc={this.handleFunc} />
        <ModalDrawer
          dataModal={dataModal}
          handleFunc={this.handleFunc}
          dataSelectSheet_E10={dataSelectSheet_E10}
          dataSelectSheet_SAP={dataSelectSheet_SAP}
        />
      </Card>
    );
  }
}

export default Main;
