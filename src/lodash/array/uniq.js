/**
 * 数组去重
 * @param {Array} array 
 */
export const uniq = array => {
  return [...new Set(array)]
}