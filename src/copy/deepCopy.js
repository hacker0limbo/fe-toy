/**
 * 
 * @param {Object} obj 
 */
export const deepCopy = obj => {
  const result = {}
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object') {
      // 由于数组 typeof 也是对象, 需要另外判断
      if (Array.isArray(value)) {
        result[key] = value.map(item => deepCopy(item))
      } else {
        result[key] = deepCopy(value)
      }
    } else if (typeof value === 'function') {
      // 使用 bind 返回新函数
      result[key] = value.bind(result)
    } else {
      result[key] = value
    }
  }

  return result
}