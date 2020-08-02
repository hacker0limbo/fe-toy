/**
 * 将一个数组分成多组, 每组长度为 n
 * @param {Array} array 
 * @param {Number} n 
 */
export const chunk = (array, n=1) => {
  const result = []
  for (let i = 0; i < array.length; i+=n) {
    result.push(array.slice(i, i + n))
  }
  return result
}