/**
 * 接受一个 array 或者对象, 返回永远是一个数组
 * @param {object|Array} collection 
 * @param {Function} callback 
 * @returns {Array}
 * @example
 * map([1, 2, 3], (v, i) => v + i) // [1, 3, 5]
 */
export const map = (collection, callback) => {
  const result = []
  Object.entries(collection).forEach(([k, v]) => {
    if (Array.isArray(collection)) {
      result.push(callback(v, parseInt(k), collection))
    } else {
      result.push(callback(v, k, collection))
    }
  })
  return result
}

