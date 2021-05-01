import {history} from 'umi';

export default {
  namespace: 'global',
  state: {
    userInfo: {},
    dataMenu: [],
  },
  reducers: {
    changeState(state, {payload}) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  effects: {},
  subscriptions: {
    setup({dispatch, history}) {},
  },
};
