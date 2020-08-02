/**
 * 去重同时允许有一个回调进行筛选
 * @param {Array} array 
 * @param {Function} callback 
 */
export const uniqBy = (array, callback) => {
  return array.reduce((result, e) => {
    if (!result.map(v => callback(v)).includes(callback(e))) {
      result.push(e)
    }
    return result
  }, [])
}