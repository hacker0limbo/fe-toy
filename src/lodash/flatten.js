/**
 * 对一个数组降维一次
 * @param {Array} array 
 * @returns {Array}
 */
export const flatten = (array) => {
  return array.reduce((result, e) => {
    if (Array.isArray(e)) {
      e.forEach(v => result.push(v))
    } else {
      result.push(e)
    }
    return result
  }, [])
}
