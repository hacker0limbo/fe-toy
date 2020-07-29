/**
 * 对一个函数执行多次
 * @param {Number} count 
 * @example
 * repeat(3)(fn)(....)
 */
export const repeat = (count) => {
  return (wrapped) => {
    return (...args) => {
      const result = []
      for (let i = 0; i < count; i++) {
        result.push(wrapped(...args))
      }
      return result
    }
  }
}