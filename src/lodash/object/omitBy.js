/**
 * 和 pickBy 相反, 返回不匹配的对象元素, callback 元素为 (value, key)
 * @param {Object} object 
 * @param {Function} callback 
 */
export const omitBy = (object, callback) => {
  return Object.entries(object).reduce((result, [k, v]) => {
    
    return !callback(v, k) ? { ...result, [k]: v } : result
  }, {})
}