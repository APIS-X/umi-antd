// 数据同步-已关联表
export const columns = [
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
];

// 数据同步-已关联表-关联字段
export const itemColumns = [
  {
    title: 'E10字段(说明)',
    dataIndex: 'columnnoE10',
    render: (t, r, index) => {
      return `${t} (${r.columnnameE10})`;
    },
  },
  {
    title: 'SAP字段(说明)',
    dataIndex: 'columnnoSAP',
    render: (t, r, index) => {
      return `${t} (${r.columnnameSAP})`;
    },
  },
];
