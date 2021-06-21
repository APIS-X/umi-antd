import React, {memo, useState, useEffect} from 'react';

import {Form, Button} from 'antd';

import styles from './index.less';

const FormItem = Form.Item;

const FormTemplate = React.forwardRef((props, ref) => {
  const {form, initialValues = {}, onFinish, children, noSearch = false, ...others} = props;
  const [_form, set_form] = useState();

  useEffect(() => {
    set_form(form || ref.current);
  }, [ref, form]);

  const funcReset = () => {
    _form.resetFields();
  };
  return (
    <>
      <Form
        form={form}
        ref={ref}
        className="mod-form"
        layout="inline"
        onFinish={onFinish}
        initialValues={initialValues}
      >
        {children}
        <FormItem className="form-handle" hidden={noSearch}>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button onClick={funcReset}>重置</Button>
        </FormItem>
      </Form>
    </>
  );
});

export default memo(FormTemplate);
