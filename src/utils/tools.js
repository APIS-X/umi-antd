/**
 * 生成独立ID
 * @param {Number} n 生成的独立id的长度
 * @param {Array} arr 和将要生成的随机数作比较去重的id集合
 * @param {String} comb 可用于生成随机数id的字符集合
 */
export const getUniqueId = (arr = [], n = 8, comb = '123456789') => {
  const random = (n) => {
    let str = comb;
    let result = '';
    for (let i = 0; i < n; i++) {
      result += str[parseInt(Math.random() * str.length)];
    }

    if (arr.includes(result)) {
      random(n);
    } else {
      return result;
    }
  };

  return random(n);
};

// 数据转换为千分位
export const formatThousandth = (data) => {
  return data && (data + '').replace(/,/gi, '').replace(/(?!^)(?=(\d{3})+($|\.))/g, ',');
};

/**
 * 将数组转换为以指定字段为key的对象
 * @param {Array} arr (将要转换的数组)
 * @param {String} key (以哪个字段作为对象的key)
 */
export const arrayToObj = (arr = [], key = 'id') => {
  const params = {};
  for (let i = 0, len = arr.length; i < len; i++) {
    const item = arr[i];
    params[item[key]] = item;
  }
  return params;
};
