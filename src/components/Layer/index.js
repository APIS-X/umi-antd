/**
 * Author: APIS
 * Description: 弹窗组件, 整合Modal和Drawer
 */
import React, {useState, useEffect, useRef} from 'react';
import {Drawer, Modal, Button, Space} from 'antd';

/**
 * Layer弹窗组件默认包含Modal和Drawer两种形式
 * @param {*} props
 * @returns
 */
const Layer = (props) => {
  const {
    title = '', // Layer标题
    mode = 'Drawer', // 弹窗类型: Modal、Drawer
    visible, // 弹窗是否显示
    width = 600, // 弹窗宽度
    className = '', // 弹窗className
    onSubmit, // 提交操作
    onClose, // 弹窗取消操作
    children, // 弹窗标签包裹的其它内容
    hasFooter, // 是否显示footer: Modal默认显示, Drawer默认不显示
    ...others
  } = props;

  const formRef = useRef();

  const CurrentLayer = mode === 'Modal' ? Modal : Drawer;

  // 定义Layer组件包裹样式名称,预留全局样式处理
  const layerClass = `mod-${mode.toLocaleLowerCase()} ${className}`;

  // 动态附加组件属性
  const layerPropsFields =
    mode === 'Modal'
      ? {
          onOk: () => {
            onFinish();
          },
          onCancel: () => {
            onCancel();
          },
        }
      : {
          onClose: () => {
            onCancel();
          },
        };

  // 表单数据重置
  useEffect(() => {
    if (visible && type === 'Form') {
      formRef && formRef.current && formRef.current.resetFields();
    }
  }, [visible]);

  const onFinish = () => {
    onSubmit(formRef.current.getFieldsValue());
  };
  const onCancel = () => {
    onClose();
  };

  // footer处理
  const renderFooter = () => {
    if (mode === 'Modal' && hasFooter === false) {
      return null;
    } else if (mode === 'Drawer' && hasFooter !== false) {
      return (
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Space>
            <Button onClick={onCancel}>取消</Button>
            <Button onClick={onFinish} type="primary">
              确定
            </Button>
          </Space>
        </div>
      );
    } else {
      return undefined;
    }
  };

  return (
    <CurrentLayer
      className={layerClass}
      title={title}
      closable={true}
      visible={visible}
      width={width}
      footer={renderFooter()}
      {...layerPropsFields}
      {...others}
    >
      {children}
    </CurrentLayer>
  );
};

export default Layer;
