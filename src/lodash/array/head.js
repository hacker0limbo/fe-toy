/**
 * 返回一个数组里的第一个元素
 * @param {Array} array 
 */
export const head = (array) => {
  if (array.length === 0) {
    return undefined
  } 
  return array[0]
}