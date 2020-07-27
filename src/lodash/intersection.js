import { uniq } from './uniq'

/**
 * 两个数组进行交集, 返回数组的元素是唯一的
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
export const intersectionTwo = (arr1, arr2) => {
  return uniq(arr1.filter(e => arr2.includes(e)))
}

/**
 * 接受多个数组, 返回一个新数组包含这些数组的交集, 返回的数组元素也是唯一的
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
