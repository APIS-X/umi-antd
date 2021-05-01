import React, {memo, PureComponent, useEffect} from 'react';

import {message, Card, Button, Modal} from 'antd';

import SearchForm from './components/SearchForm';
import ModTableList from './components/ModTableList';
import ModalDrawer from './components/ModalDrawer';
import requests from '@/utils/request';
import api from '@/api';
import styles from './index.less';

class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [
        {
          tablenoE10: 'E10_a',
          tablenameE10: '表E10_a',
          tablenoSAP: 'SAP_a',
          tablenameSAP: '表SAP_a',
          column: [
            {
              columnnoE10: 'E10_a_A',
              columnnameE10: '字段E10_a_A',
              columnnoSAP: 'SAP_a_A',
              columnnameSAP: '字段SAP_a_A',
            },
            {
              columnnoE10: 'E10_a_B',
              columnnameE10: '字段E10_a_B',
              columnnoSAP: 'SAP_a_B',
              columnnameSAP: '字段SAP_a_B',
            },
          ],
        },
        {
          tablenoE10: 'E10_b',
          tablenameE10: '表E10_b',
          tablenoSAP: 'SAP_b',
          tablenameSAP: '表SAP_b',
          column: [
            {
              columnnoE10: 'E10_a_A',
              columnnameE10: '字段E10_a_A',
              columnnoSAP: 'SAP_a_A',
              columnnameSAP: '字段SAP_a_A',
            },
            {
              columnnoE10: 'E10_a_B',
              columnnameE10: '字段E10_a_B',
              columnnoSAP: 'SAP_a_B',
              columnnameSAP: '字段SAP_a_B',
            },
          ],
        },
        {
          tablenoE10: 'E10_c',
          tablenameE10: '表E10_c',
          tablenoSAP: 'SAP_c',
          tablenameSAP: '表SAP_c',
          column: [
            {
              columnnoE10: 'E10_a_A',
              columnnameE10: '字段E10_a_A',
              columnnoSAP: 'SAP_a_A',
              columnnameSAP: '字段SAP_a_A',
            },
            {
              columnnoE10: 'E10_a_B',
              columnnameE10: '字段E10_a_B',
              columnnoSAP: 'SAP_a_B',
              columnnameSAP: '字段SAP_a_B',
            },
          ],
        },
        {
          tablenoE10: 'E10_d',
          tablenameE10: '表E10_d',
          tablenoSAP: 'SAP_d',
          tablenameSAP: '表SAP_d',
          column: [
            {
              columnnoE10: 'E10_a_A',
              columnnameE10: '字段E10_a_A',
              columnnoSAP: 'SAP_a_A',
              columnnameSAP: '字段SAP_a_A',
            },
            {
              columnnoE10: 'E10_a_B',
              columnnameE10: '字段E10_a_B',
              columnnoSAP: 'SAP_a_B',
              columnnameSAP: '字段SAP_a_B',
            },
          ],
        },
      ],
      dataTableList_E10: [
        {
          tablename: 'E10表1',
          tableno: 'E10_1',
        },
        {
          tablename: 'E10表2',
          tableno: 'E10_2',
        },
        {
          tablename: 'E10表3',
          tableno: 'E10_3',
        },
        {
          tablename: 'E10表4',
          tableno: 'E10_4',
        },
      ],
      dataTableList_SAP: [],
      dataModal: {
        visible: false,
      },
    };
  }

  componentDidMount() {
    // 获取关联列表数据
    // this.getData(api.getTableInfo, 'dataList');
    // 获取E10列表
    // this.getData(api.getTableList, 'dataTableList_E10', {tabletype: 1});
    // 获取SAP列表
    // this.getData(api.getTableList, 'dataTableList_SAP', {tabletype: 2});
  }
  getData = async (url, fields, params, method) => {
    const data = await requests(url, params, method);
    this.setState({[fields]: data});
  };

  handleDelete = async (t) => {
    const data = await requests(api.deleteTableInfo, t);
    if (data) {
      message.success('删除成功！');
    }
  };

  handleFunc = async (type, params) => {
    switch (type) {
      case 'ADD': {
      }
      case 'UPDATE': {
        this.setState({
          dataModal: {
            visible: true,
            modalData: params,
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
          onOk() {
            // handleDelete(t);
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
    const {dataList, dataTableList_E10, dataModal} = this.state;

    const dataSearch = {
      dataTableList_E10,
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
        <ModalDrawer dataModal={dataModal} handleFunc={this.handleFunc} />
      </Card>
    );
  }
}

export default Main;
