import {request} from 'umi';
import {message} from 'antd';

const requests = (url, options = {}, method = 'post') => {
  const defaultOptions = {
    credentials: 'include',
    headers: {
      token: '',
    },
  };

  const params = {...defaultOptions, ...options, method, skipErrorHandler: true};

  console.log('params', params);

  return request(url, params).then((response) => {
    const {status, msg, data} = response;

    if (status === 1) {
      return data;
    } else {
      message.warning(msg);
      return false;
    }
    return data;
  });
};

export default requests;
