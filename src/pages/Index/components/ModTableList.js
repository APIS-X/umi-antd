import React, {memo, PureComponent, useEffect} from 'react';
import {Button, Table} from 'antd';

const ModTableList = memo((props) => {
  const {dataSource = [], handleFunc} = props;

  const columns = [
    {
      title: 'E10表名(说明)',
      dataIndex: 'tablenoE10',
      render: (t, r, index) => {
        return `${t} (${r.tablenameE10})`;
      },
    },
    {
      title: '已关联SAP表名(说明)',
      dataIndex: 'tablenoSAP',
      render: (t, r, index) => {
        return `${t} (${r.tablenameSAP})`;
      },
    },
    {
      title: '操作',
      render: (t, r, index) => {
        return (
          <>
            <Button type="link" onClick={() => handleFunc('UPDATE', r)}>
              修改
            </Button>
            <Button type="link" onClick={() => handleFunc('DELETE', r)}>
              删除
            </Button>
          </>
        );
      },
    },
  ];

  return (
    <>
      <Table
        className="mt-15"
        rowKey="tablenoE10"
        bordered={true}
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
    </>
  );
});

export default ModTableList;
