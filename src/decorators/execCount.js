/**
 * 得到一个函数被调用的次数, 可以传入一个回调
 * @param {Function} callback 
 * @example
 * execCount(console.log)(fn)(...)
 */
export const execCount = (callback) => {
  return wrapped => {
    const wrapper = (...args) => {
      wrapper.callsCount++
      callback && callback(wrapper.callsCount)
      return wrapped(...args)
    }
    wrapper.callsCount = 0
    return wrapper
  }
}