import { uniqBy } from './uniqBy'
import { union } from './union'

/**
 * 最后接受一个回调进行 union 操作, 如果最后一个回调函数不提供, 使用普通 union 进行结果运算
 * @param  {...Array} args 
 */
export const unionBy = (...args) => {
  const arrays = args.slice(0, -1)
  const callback = args[args.length-1]
  if (Array.isArray(callback)) {
    return union(...args)
  }
  return arrays.reduce((result, arr) => {
    return uniqBy([...result, ...arr], callback)
  }, [])
}