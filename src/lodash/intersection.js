export const intersectionTwo = (arr1, arr2) => {
  return arr1.filter(e => arr2.includes(e))
}

/**
 * 接受多个数组, 返回一个新数组包含这些数组的交集
 * @param  {...Array} arrays 
 * @returns {Array}
 */
export const intersection = (...arrays) => {
  let result = arrays[0]
  if (arrays.length === 1) {
    return result
  }
  for (let i = 1; i < arrays.length; i++) {
    const arr = arrays[i];
    result = intersectionTwo(result, arr)
  }

  return result
}
