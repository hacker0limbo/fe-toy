/**
 * 根据 callback 结果返回指定的对象元素, callback 参数为 (value, key)
 * @param {Object} object 
 * @param {Function} callback 
 */
export const pickBy = (object, callback) => {
  return Object.entries(object).reduce((result, [k, v]) => {
    return callback(v, k) ? { ...result, [k]: v } : result
  }, {})
}