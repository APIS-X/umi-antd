import {memo, useState, useEffect} from 'react';
import {Button, Space} from 'antd';
import {
  AppstoreAddOutlined,
  DatabaseOutlined,
  DesktopOutlined,
  SaveOutlined,
  FileProtectOutlined,
} from '@ant-design/icons';

const Template = () => {
  return (
    <div className="v-handler">
      <Space>
        <Button type="link" size="large" icon={<DatabaseOutlined />}>
          基础信息
        </Button>
        <Button type="link" size="large" icon={<AppstoreAddOutlined />}>
          新增模块
        </Button>
        <Button type="link" size="large" icon={<DesktopOutlined />}>
          预览
        </Button>
        <Button type="link" size="large" icon={<SaveOutlined />}>
          保存
        </Button>
        <Button type="link" size="large" icon={<FileProtectOutlined />}>
          发布
        </Button>
      </Space>
    </div>
  );
};

export default memo(Template);
