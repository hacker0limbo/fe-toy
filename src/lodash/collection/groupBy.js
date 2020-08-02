/**
 * 根据 callback 重新组织一个数组
 * @param {Array} array 
 * @param {Function} callback
 * @returns {object}
 */
export const groupBy = (array, callback) => {
  return array.reduce((result, e) => {
    const k = callback(e)
    if (result.hasOwnProperty(k)) {
      result[k].push(e)
    } else {
      result[k] = [e]
    }
    return result
  }, {})
}