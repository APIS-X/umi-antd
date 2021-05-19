import {history} from 'umi';

export default {
  namespace: 'app',
  state: {
    user: {}, // 用户基本信息
    userAuth: [], // 用户权限code集合
    routeMaps: {}, // 本地路由
  },
  effects: {},
  reducers: {},
  subscriptions: {
    setup({dispatch, history}) {
      // 此处可以对路由跳转进行监听...
    },
  },
};
