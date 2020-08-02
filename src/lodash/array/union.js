import { uniq } from './uniq'

/**
 * 接受多个数组, 返回这些数组的合集
 * @param  {...Array} arrays 
 */
export const union = (...arrays) => {
  return uniq(arrays.reduce((result, arr) => {
    return [...result, ...arr]
  }, []))
}