/**
 * 返回除了第一个元素之外的所有元素
 * @param {Array} array 
 */
export const tail = array => {
  if (array.length === 0) {
    return []
  }

  return array.slice(1, array.length)
}