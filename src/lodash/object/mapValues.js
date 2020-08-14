/**
 * 返回的对象的 value 为 callback 的结果
 * @param {Object} object 
 * @param {Function} callback 
 */
export const mapValues = (object, callback) => {
  return Object.entries(object).reduce((result, [key, value]) => {
    return {
      ...result,
      [key]: callback(value, key, object)
    }
  }, {})
}