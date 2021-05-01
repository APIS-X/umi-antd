import React, {memo, PureComponent, useEffect} from 'react';

import {message, Card, Select, Form, Button, Table, Cascader, Modal, Drawer} from 'antd';

import requests from '@/utils/request';
import api from '@/api';
import {columns, itemColumns} from './columns';

const FormItem = Form.Item;
const {Option} = Select;

const style = {
  Select: {
    width: 300,
  },
  Cascader: {
    width: 400,
  },
};

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
      },
      {
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      },
    ],
  },
];

/**
 * Search
 */
const SearchForm = memo((props) => {
  const [form] = Form.useForm();
  const {
    data: {dataTableList_E10 = []},
  } = props;
  const initialValues = {
    tablenoE10: undefined,
  };
  const onFinish = (values) => {
    console.log('values', values);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <Form layout="inline" form={form} onFinish={onFinish} initialValues={initialValues}>
        <FormItem name="tablenoE10">
          <Select placeholder="请选择E10表名称" style={style.Select}>
            {dataTableList_E10.map((item) => {
              const {tablename, tableno} = item;
              return (
                <Option key={tableno} value={tableno}>
                  {tablename}
                </Option>
              );
            })}
          </Select>
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button onClick={onReset}>重置</Button>
        </FormItem>
      </Form>
    </>
  );
});

/**
 *  Drawer
 */
const ModalDrawer = memo((props) => {
  const [form] = Form.useForm();
  const {
    dataModal: {visible = false, modalData},
    handleFunc,
  } = props;
  const initialValues = {
    tablenoE10: undefined,
  };

  const onFinish = () => {
    form.validateFields().then((values) => {
      console.log('values', values);
      const {
        E10: [tablenoE10, columnnoE10],
        SAP: [tablenoSAP, columnnoSAP],
      } = values;

      const params = {
        tablenoE10,
        tablenameE10: '',
        tablenoSAP,
        tablenameSAP: '',
        colmun: [
          {
            columnnoE10,
            columnnameE10: '',
            columnnoSAP,
            columnnameSAP: '',
          },
        ],
      };

      handleFunc('SUBMIT', params);
    });
  };

  return (
    <Drawer
      title={modalData ? '数据编辑' : '数据新增'}
      width="500"
      placement="right"
      closable={false}
      onClose={() => handleFunc('CLOSE')}
      visible={visible}
      footer={
        <>
          <Button type="primary" onClick={onFinish}>
            保存
          </Button>
        </>
      }
    >
      <Form layout="horizontal" form={form} colon={false}>
        <FormItem
          label=" "
          name="E10"
          rules={[{required: true, message: '请选择E10相关表以及字段'}]}
        >
          <Cascader
            options={options}
            placeholder="请选择E10相关表以及字段"
            style={style.Cascader}
          />
        </FormItem>
        <FormItem
          label=" "
          name="SAP"
          rules={[{required: true, message: '请选择SAP相关表以及字段'}]}
        >
          <Cascader
            options={options}
            placeholder="请选择SAP相关表以及字段"
            style={style.Cascader}
          />
        </FormItem>
      </Form>
    </Drawer>
  );
});

/**
 * Table
 */
const ModTable = memo((props) => {
  const {dataSource = [], handleFunc} = props;

  // table添加操作列
  useEffect(() => {
    const columnsHandle = {
      title: '操作',
      render: (t, r, index) => {
        return (
          <>
            <Button type="link" onClick={() => handleFunc('UPDATE', t)}>
              修改
            </Button>
            <Button type="link" onClick={() => handleFunc('DELETE', t)}>
              删除
            </Button>
          </>
        );
      },
    };
    columns.push(columnsHandle);
    // itemColumns.push(columnsHandle);
  }, []);

  const expandedRowRender = (record, index, indent, expanded) => {
    const itemSource = (record.column || []).map((item) => {
      item.tablenoE10 = record.tablenoE10;
      return item;
    });
    return (
      <Table
        rowKey="columnnoE10"
        bordered={true}
        dataSource={itemSource}
        columns={itemColumns}
        pagination={false}
      />
    );
  };

  return (
    <>
      <Table
        className="mt-15"
        rowKey="tablenoE10"
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        expandable={{expandedRowRender}}
        pagination={false}
      />
    </>
  );
});

/**
 * Main
 */
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
        title="数据关联"
        size="small"
        bordered={false}
        extra={<Button type="primary">新增</Button>}
      >
        <SearchForm data={dataSearch} />
        <ModTable dataSource={dataList} handleFunc={this.handleFunc} />
        <ModalDrawer dataModal={dataModal} handleFunc={this.handleFunc} />
      </Card>
    );
  }
}

export default Main;
