/**
 * 返回数组里除了最后一个元素的所有元素
 * @param {Array} array 
 */
export const initial = (array) => {
  if (array.length === 0) {
    return []
  } 

  return array.slice(0, -1)
}