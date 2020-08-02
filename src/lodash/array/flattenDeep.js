/**
 * 将一个数组降维成一维
 * @param {Array} array 
 * @returns {Array}
 */
export const flattenDeep = array => {
  let result = []
  array.forEach(e => {
    if (Array.isArray(e)) {
      result = [
        ...result,
        ...flattenDeep(e)
      ]
    } else {
      result.push(e)
    }
  })
  return result
}