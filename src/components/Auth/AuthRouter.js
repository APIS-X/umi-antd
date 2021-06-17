import React, {useEffect, useState} from 'react';
import {connect} from 'dva';

import NoFoundPage from '@/pages/404';

import {authMaps} from '@/routes';

/**
 * 路由权限控制组件
 * 路由权限控制需要在路由配置里面对应的路由设置'auth'字段即可，支持字符串和数组，不需要加权限的路由不设置即可。
 * 原则上一个页面允许存在多个权限code，但是不允许一个code对应多个页面
 * @param {*} props
 */
const AuthRouter = (props) => {
  const {userAuth, path, children} = props;

  const currentAuth = authMaps[path];

  let hasAuth = true;
  if (currentAuth) {
    if (Array.isArray(currentAuth)) {
      hasAuth = currentAuth.some((item) => userAuth.includes(item));
    } else {
      hasAuth = userAuth.includes(currentAuth);
    }
  }

  return <>{hasAuth ? children : <NoFoundPage />}</>;
};
export default connect(({app}) => {
  return {
    userAuth: app.userAuth,
  };
})(AuthRouter);
