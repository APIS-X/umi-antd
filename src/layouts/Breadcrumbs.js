import React, {useState} from 'react';
import {Layout, Menu, Breadcrumb} from 'antd';

const BreadcrumbItem = Breadcrumb.Item;

const Breadcrumbs = (props) => {
  return (
    <Breadcrumb>
      {/* <BreadcrumbItem>User</BreadcrumbItem>
      <BreadcrumbItem>Bill</BreadcrumbItem> */}
    </Breadcrumb>
  );
};

export default React.memo(Breadcrumbs);
