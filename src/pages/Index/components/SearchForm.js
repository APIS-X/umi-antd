import React, {memo, PureComponent, useEffect} from 'react';

import {Select, Form, Button} from 'antd';

const FormItem = Form.Item;
const {Option} = Select;

const SearchForm = (props) => {
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
          <Select placeholder="请选择E10表名称" style={{width: 300}}>
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
};

export default memo(SearchForm);
