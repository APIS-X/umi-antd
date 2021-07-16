import React, {useEffect, useState} from 'react';
import {connect} from 'dva';
import _ from 'lodash';

import styles from './style.less';

/**
 * 功能权限组件
 * @param {Array} userAuth  用户权限code集合
 * @param {String || Array} auth 权限code，不传则表示始终有权限，
 * @param {Boolean} disabled 是否将节点样式设置为disabled状态
 * @param {*} children
 * @returns ReactDom
 * Example:
 * 引入：
 * import {AuthBlock} from '@/components/auth';
 * 使用：
 * <AuthBlock auth="code"><div>需要加权限控制的dom</div></AuthBlock>
 */
const AuthBlock = ({auth, userAuth = [], children, disabled = false}) => {
  if (
    (Array.isArray(auth) && _.intersection(userAuth, auth).length) ||
    userAuth.includes(auth) ||
    !auth
  ) {
    return <>{children}</>;
  } else {
    return disabled ? <span className={styles.disabled}>{children}</span> : null;
  }
};

export default connect(({app}) => {
  return {
    userAuth: app.userAuth,
  };
})(AuthBlock);
