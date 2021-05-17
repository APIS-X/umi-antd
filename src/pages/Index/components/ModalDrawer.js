import React, {memo, PureComponent, useEffect, useState} from 'react';

import {Form, Button, Table, Select, Drawer} from 'antd';
import {SwapOutlined} from '@/constants/icons';
import {getUniqueId} from '@/utils';
import {options_E10, options_SAP} from '@mock';

const FormItem = Form.Item;
const Option = Select.Option;

const styleSelect = {
  width: 300,
};
const dataSelectFields_E10 = options_E10[0].children;
const dataSelectFields_SAP = options_SAP[0].children;

const ModalDrawer = (props) => {
  const [form] = Form.useForm();
  const {
    handleFunc,
    dataModal: {visible = false, modalData = {}},
    dataSelectSheet_E10,
    dataSelectSheet_SAP,
  } = props;

  const [tablenoE10, setTablenoE10] = useState();
  const [tablenameE10, setTablenameE10] = useState();
  const [tablenoSAP, setTablenoSAP] = useState();
  const [tablenameSAP, setTablenameSAP] = useState();
  const [dataSource, setDataSource] = useState([]);
  const [isAdd, setIsAdd] = useState();
  const [ids, setIds] = useState([]);

  useEffect(() => {
    if (visible) {
      console.log('props', props);
      const {tablenoE10, tablenameE10, tablenoSAP, tablenameSAP, column = [], status} = modalData;
      const currentIds = column.map((item) => item.id);
      const newColumns = column.map((item) => {
        item.id = getUniqueId(currentIds);
        currentIds.push(item.id);
        return item;
      });

      setTablenoE10(tablenoE10);
      setTablenameE10(tablenameE10);
      setTablenoSAP(tablenoSAP);
      setTablenameSAP(tablenameSAP);
      setDataSource(newColumns);
      setIsAdd(status === 'ADD');
      setIds(currentIds);
    }
  }, [visible]);

  // select 相关操作
  const funcChange = (type, {value, label, index}) => {
    switch (type) {
      case 'SHEET_E10': {
        setTablenoE10(value);
        setTablenameE10(label);
        setDataSource([]);
        break;
      }
      case 'SHEET_SAP': {
        setTablenoSAP(value);
        setTablenameSAP(label);
        setDataSource([]);
        break;
      }
      case 'FIELD_E10': {
        const column = [...dataSource];
        column[index] = {...column[index], columnnoE10: value, columnnameE10: label};
        setDataSource(column);
        break;
      }
      case 'FIELD_SAP': {
        const column = [...dataSource];
        column[index] = {...column[index], columnnoSAP: value, a: label};
        setDataSource(column);
        break;
      }
    }
  };

  const funcHandle = (type, params = {}) => {
    const {index} = params;
    switch (type) {
      case 'ADD': {
        const id = getUniqueId(ids);
        setIds([...ids, id]);
        const column = [
          {
            id,
            columnnoE10: undefined,
            columnnameE10: undefined,
            columnnoSAP: undefined,
            columnnameSAP: undefined,
          },
          ...dataSource,
        ];
        console.log('column', column);
        setDataSource(column);
        break;
      }
      case 'DELETE': {
        const column = [...dataSource];
        column.splice(index, 1);
        setDataSource(column);
        break;
      }
      case 'SUBMIT': {
        break;
      }
    }
  };

  const columns = [
    {
      title: 'E10字段(说明)',
      dataIndex: 'columnnoE10',
      render: (t, r, index) => {
        const defaultValue = t ? {value: t, label: r.columnnameE10} : t;
        return (
          <Select
            placeholder="请选择E10字段"
            labelInValue
            showSearch
            style={styleSelect}
            defaultValue={defaultValue}
            // value={{value: t, label: r.columnnameE10}}
            onChange={(value) => funcChange('FIELD_E10', {...value, index})}
          >
            {dataSelectFields_E10.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        );
      },
    },
    {
      title: 'SAP字段(说明)',
      dataIndex: 'columnnoSAP',
      render: (t, r, index) => {
        const defaultValue = t ? {value: t, label: r.columnnameSAP} : t;
        return (
          <Select
            placeholder="请选择SAP字段"
            labelInValue
            showSearch
            style={styleSelect}
            defaultValue={defaultValue}
            // value={{value: t, label: r.columnnameSAP}}
            onChange={(value) => funcChange('FIELD_SAP', {...value, index})}
          >
            {dataSelectFields_SAP.map((item) => (
              <Option key={item.value} value={item.value}>
                {item.label}
              </Option>
            ))}
          </Select>
        );
      },
    },
    {
      title: '操作',
      render: (t, r, index) => {
        return (
          <>
            <Button type="link" onClick={() => funcHandle('DELETE', {...r, index})}>
              删除
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <Drawer
      title={isAdd ? '数据新增' : '数据编辑'}
      width="800px"
      placement="right"
      onClose={() => handleFunc('CLOSE')}
      visible={visible}
      footer={
        <div>
          <Button onClick={() => handleFunc('CLOSE')} type="primary">
            保存
          </Button>
        </div>
      }
    >
      <Form form={form}>
        <FormItem label="关&nbsp;&nbsp;联&nbsp;&nbsp;表">
          <Select
            placeholder="请选择关联表E10"
            labelInValue
            showSearch
            allowClear
            style={styleSelect}
            disabled={!isAdd}
            defaultValue={tablenoE10}
            // value={{value: tablenoE10, label: tablenameE10}}
            onChange={(value) => funcChange('SHEET_E10', {...value})}
          >
            {dataSelectSheet_E10.map((item) => (
              <Option key={item.tableno} value={item.tableno}>
                {item.tablename}
              </Option>
            ))}
          </Select>
          &nbsp;&nbsp;
          <SwapOutlined />
          &nbsp;&nbsp;
          <Select
            placeholder="请选择关联表SAP"
            labelInValue
            showSearch
            allowClear
            style={styleSelect}
            disabled={!isAdd}
            defaultValue={tablenoSAP}
            // value={{value: tablenoSAP, label: tablenameSAP}}
            onChange={(value) => funcChange('SHEET_SAP', {...value})}
          >
            {dataSelectSheet_SAP.map((item) => (
              <Option key={item.tableno} value={item.tableno}>
                {item.tablename}
              </Option>
            ))}
          </Select>
        </FormItem>
        <FormItem label="关联字段">
          <Button
            type="dashed"
            disabled={!(tablenoE10 && tablenoSAP)}
            onClick={() => funcHandle('ADD')}
          >
            新增关联字段
          </Button>
        </FormItem>
      </Form>
      <section className="mod-drawer-table">
        <div className="container">
          <Table
            rowKey="id"
            bordered={true}
            dataSource={dataSource}
            columns={columns}
            pagination={false}
          />
        </div>
      </section>
    </Drawer>
  );
};

export default memo(ModalDrawer);
