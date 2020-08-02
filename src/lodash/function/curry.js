/**
 * 柯里化一个函数
 * @param {Function} callback 需要被柯里化的函数
 * @example
 * const test = (a, b, c, ...d) => true
 * curry(test)(1)(2)(3)
 * curry(test)(1)(2)(3, 4, 5)
 * curry(test)(1)(2, 3, 4)
 * curry(test)(1, 2, 3)
 */
export function curry(callback) {
  return (...args) => {
    if (args.length < callback.length) {
      return curry(callback.bind(null, ...args))
    } else {
      return callback(...args)
    }
  }
}
