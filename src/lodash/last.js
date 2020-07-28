/**
 * 返回数组里的最后一个元素
 * @param {Array} array 
 */
export const last = array => {
  if (array.length === 0) {
    return undefined
  } 

  return array[array.length-1]
}