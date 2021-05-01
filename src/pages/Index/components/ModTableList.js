import React, {memo, PureComponent, useEffect} from 'react';
import {message, Card, Select, Form, Button, Table, Cascader, Modal, Drawer} from 'antd';

import {columns, itemColumns} from './columns';

const ModTableList = memo((props) => {
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
        // expandable={{expandedRowRender}}
        pagination={false}
      />
    </>
  );
});

export default ModTableList;
