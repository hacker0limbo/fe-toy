import { last } from './last'
import { initial } from './initial'
import { intersection } from './intersection'
import { uniq } from './uniq'

/**
 * 两个数组进行交集, 同时接受一个回调在交集时调用
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @param {Function} callback 
 */
export const intersectionTwoBy = (arr1, arr2, callback) => {
  return uniq(arr1.filter(e => arr2.map(v => callback(v)).includes(callback(e))))
}

/**
 * 最后一个参数为回调, 前面参数均为数组
 * @param  {...any} args 
 */
export const intersectionBy = (...args) => {
  const arrays = initial(args)
  const callback = last(args)
  if (Array.isArray(callback)) {
    return intersection(...args)
  }

  return arrays.reduce((result, arr) => {
    return intersectionTwoBy(result, arr, callback)
  })
}