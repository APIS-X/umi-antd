import React, {memo, useState, useEffect} from 'react';

import {Form, Button} from 'antd';

import ModCard from '@/components/ModCard';
import SearchForm from '@/components/Form/Form';

const FormItem = Form.Item;

const Template = (props) => {
  const [form] = Form.useForm();

  const funcFinish = (values) => {
    console.log('values', values);
  };

  return (
    <ModCard title="TableList">
      <SearchForm form={form} onFinish={funcFinish}>
        <FormItem label="姓名" name="name">
          <Input placeholder="请输入姓名" />
        </FormItem>
      </SearchForm>
    </ModCard>
  );
};

export default memo(Template);
