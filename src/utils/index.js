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
