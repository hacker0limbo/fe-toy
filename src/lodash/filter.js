/**
 * 接受一个对象或者数组, 返回一个数组, 如果接受的是数组直接返回数组元素, 否则返回对象里的 value
 * @param {Object|Array} collection 
 * @param {Function} callback 
 */
export const filter = (collection, callback) => {
  const result = []
  Object.entries(collection).forEach(([k, v]) => {
    if (callback(v, Array.isArray(collection) ? parseInt(k) : k, collection)) {
      result.push(v)
    }
  })
  return result
}