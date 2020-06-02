/**
 * 浅拷贝一个对象
 * @param {Object} obj 给定的对象
 * @returns 一个新的对象
 */
export const shallowCopy = obj => {
  const result  = {}
  for (const [key, value] of Object.entries(obj)) {
    result[key] = value
  }

  return result
}