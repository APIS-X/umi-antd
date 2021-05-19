/**
 * Description: 功能权限组件
 * Author: APIS
 */
import React, {useEffect, useState} from 'react';
import {connect} from 'dva';
import _ from 'lodash';

/**
 * 功能权限组件
 * @param {*} userAuth
 * @param {String || Array} auth 权限code，不传则表示始终有权限，
 * @param {*} children
 * @returns ReactDom
 * Example:
 * 引入：
 * import {AuthBlock} from '@/components/auth';
 * 使用：
 * <AuthBlock auth="code"><div>需要加权限控制的dom</div></AuthBlock>
 */
const AuthBlock = ({auth, userAuth = [], children}) => {
  if (
    (Array.isArray(auth) && _.intersection(userAuth, auth).length) ||
    userAuth.includes(auth) ||
    !auth
  ) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export default connect(({app}) => {
  return {
    userAuth: app.userAuth,
  };
})(AuthBlock);
