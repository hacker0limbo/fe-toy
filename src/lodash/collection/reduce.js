/**
 * 第一个参数接受一个对象或者数组, 对应的回调函数的第三个参数为 key 或者 index
 * @param {Object|Array} collection 
 * @param {Function} callback 
 * @param {any} initialValue 
 */
export const reduce = (collection, callback, initialValue) => {
  let i =  typeof initialValue !== 'undefined' ? 0 : 1
  let result = typeof initialValue !== 'undefined' ? initialValue : Object.values(collection)[0]
  
  const keys = Object.keys(collection)
  for (i; i < keys.length; i++) {
    const k = keys[i]
    const v = collection[k]
    result = callback(result, v, Array.isArray(collection) ? parseInt(k) : k, collection)
  }
  return result
}