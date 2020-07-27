import { union } from './union'
import { difference } from './difference'
import { last } from './last'
import { initial } from './initial'

/**
 * 接受一个 callback, 在执行 difference 一起调用, 返回结果的数组可以存在重复
 * @param  {...any} args 
 */
export const differenceBy = (...args) => {
  const callback = last(args)
  const [head, ...rest] = initial(args)

  if (Array.isArray(callback)) {
    return difference(...args)
  }

  return head.filter(e => !union(...rest).map(v => callback(v)).includes(callback(e)))
}