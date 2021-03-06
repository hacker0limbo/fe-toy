/**
 * 将一个数组和多个值进行连接
 * @param {Array} array 
 * @param  {...any} values 
 */
export const concat = (array, ...values) => {
  return values.reduce((result, v) => Array.isArray(v) ? [...result, ...v] : [...result, v], [...array])
}