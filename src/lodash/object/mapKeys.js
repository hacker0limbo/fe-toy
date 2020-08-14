/**
 * 返回的对象 key 为 callback 的结果
 * @param {Object} object 
 * @param {Function} callback 
 */
export const mapKeys = (object, callback) => {
  return Object.entries(object).reduce((result, [key, value]) => {
    return {
      ...result,
      [callback(value, key, object)]: value
    }
  }, {})
}