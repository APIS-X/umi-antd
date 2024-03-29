import {request} from 'umi';
import {message} from 'antd';

import {regUrl} from '@/constants/reg';
import {apiPrefix} from '@/settings';

const requests = (url, options = {}, method = 'post') => {
  const hasApiPrefix = regUrl.test(url);
  const defaultOptions = {
    prefix: `${hasApiPrefix ? '' : apiPrefix}${method}/`,
    credentials: 'include',
    headers: {
      token: '',
    },
  };

  const params = {...defaultOptions, ...options, method, skipErrorHandler: true};

  return request(url, params).then((response) => {
    const {status, msg, data} = response;

    if (status === 1) {
      return data;
    } else {
      message.warning(msg);
      return false;
    }
  });
};

export default requests;
