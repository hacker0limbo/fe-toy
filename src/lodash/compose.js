/**
 * 将原本想要 f1(f2(x)) 调用的, 变成 compose(f1, f2)(x) 格式
 * @param  {...Function} funcs 
 */
export const compose = (...funcs) => {
  if (funcs.length === 1) {
    return funcs[0]
  }

  // 这里的 ...args 其实就是 compose(f1, f2, f3)(x) 的 x
  return funcs.reduce((outerFn, innerFn) => ((...args) => outerFn(innerFn(...args))))
}