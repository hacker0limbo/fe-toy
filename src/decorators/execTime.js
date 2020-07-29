/**
 * 打印一个函数的执行时间
 * @param {Function} wrapped 
 * @example
 * execTime(fn)(...)
 */
export const execTime = wrapped => {
  return (...args) => {
    console.time(`${wrapped.name} exec time`)
    const result = wrapped(...args)
    console.timeEnd(`${wrapped.name} exec time`)
    return result
  }
}