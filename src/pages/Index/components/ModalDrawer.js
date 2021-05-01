import React, {memo, PureComponent, useEffect} from 'react';

import {Form, Button, Table, Cascader, Drawer} from 'antd';

import {itemColumns} from './columns';
import {Switch} from 'react-router';

const FormItem = Form.Item;

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

const ModalDrawer = (props) => {
  const [form] = Form.useForm();
  const {
    dataModal: {visible = false, modalData = {}},
    handleFunc,
  } = props;
  const {tablenoE10, tablenameE10, tablenoSAP, tablenameSAP, column = []} = modalData;

  console.log('modalData', modalData);
  const initialValues = {
    tablenoE10: undefined,
  };

  // 字段修改
  const handleItem = (type, t, index) => {
    switch (type) {
      case 'ADD': {
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
        });
        break;
      }
      case 'UPDATE': {
        break;
      }
      case 'DELETE': {
        break;
      }
    }
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

  // table添加操作列
  useEffect(() => {
    const columnsHandle = {
      title: '操作',
      render: (t, r, index) => {
        return (
          <>
            <Button type="link" onClick={() => handleItem('UPDATE', t, index)}>
              修改
            </Button>
            <Button type="link" onClick={() => handleItem('DELETE', t, index)}>
              删除
            </Button>
          </>
        );
      },
    };
    itemColumns.push(columnsHandle);
  }, []);

  return (
    <Drawer
      title={column.length ? '数据编辑' : '数据新增'}
      width="calc(100vw - 220px)"
      placement="right"
      onClose={() => handleFunc('CLOSE')}
      visible={visible}
    >
      <Form layout="inline" form={form} colon={false}>
        <FormItem name="E10" rules={[{required: true, message: '请选择E10相关表以及字段'}]}>
          <Cascader options={options} placeholder="请选择E10相关表以及字段" style={{width: 400}} />
        </FormItem>
        <FormItem name="SAP" rules={[{required: true, message: '请选择SAP相关表以及字段'}]}>
          <Cascader options={options} placeholder="请选择SAP相关表以及字段" style={{width: 400}} />
        </FormItem>
        <FormItem>
          <Button type="primary" onClick={() => handleItem('ADD')}>
            新增
          </Button>
        </FormItem>
      </Form>

      <section className="mod-drawer-table">
        <div className="container mt-15">
          <Table
            rowKey="columnnoE10"
            bordered={true}
            dataSource={column}
            columns={itemColumns}
            pagination={false}
          />
        </div>
      </section>
    </Drawer>
  );
};

export default memo(ModalDrawer);
