import {history} from 'umi';

export default {
  namespace: 'app',
  state: {
    user: {}, // 用户基本信息
    userAuth: [], // 用户权限code集合
    routeMaps: {}, // 本地路由
    dataMenus: [
      {
        name: '首页',
        code: 'INDEX',
        type: 'menu',
        icon: 'MailOutlined',
        url: '/home',
      },
      {
        name: '图表',
        code: 'CHARTS',
        type: 'menu',
        icon: 'AppstoreOutlined',
        children: [
          {
            name: 'Echarts',
            code: 'CHARTS_ECHARTS',
            type: 'menu',
            url: '/charts/echarts',
          },
        ],
      },
      {
        name: 'Table',
        code: 'TABLE',
        type: 'menu',
        icon: 'SettingOutlined',
        children: [
          {
            name: 'TableList',
            code: 'TABLE_LIST',
            type: 'menu',
            url: '/table/list',
          },
          {
            name: 'TableCard',
            code: 'TABLE_CARD',
            type: 'menu',
            url: '/table/card',
          },
        ],
      },
    ],
  },
  effects: {},
  reducers: {},
  subscriptions: {
    setup({dispatch, history}) {
      // 此处可以对路由跳转进行监听...
    },
  },
};
