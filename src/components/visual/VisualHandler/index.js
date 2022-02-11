import {memo, useState, useEffect} from 'react';
import {Layout, Button, Space} from 'antd';
import {DesktopOutlined, SaveOutlined, FileProtectOutlined} from '@ant-design/icons';

const {Header} = Layout;

const Template = () => {
  return (
    <div className="v-handler">
      <Space>
        <Button type="link" icon={<DesktopOutlined />}>
          预览
        </Button>
        <Button type="link" icon={<SaveOutlined />}>
          保存
        </Button>
        <Button type="link" icon={<FileProtectOutlined />}>
          发布
        </Button>
      </Space>
    </div>
  );
};

export default memo(Template);
