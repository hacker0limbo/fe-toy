/**
 * 给定一些数组, 将这些数组打包成一个二维数组
 * @param  {...Array} arrays 
 * @returns {Array}
 */
export const zip = (...arrays) => {
  const [arr, ...rest] = arrays
  return arr.reduce((result, e, index) => {
    const zipped = rest.reduce((acc, arr) => {
      return [...acc, arr[index]]
    }, [e])
    result.push(zipped)
    return result
  }, [])
}