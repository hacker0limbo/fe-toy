/**
 * 等同于 composeLeft, 将 flow(f1, f2) 的调用过程为 f2(f1(x))
 * @param  {...Function} funcs 
 */
export const flow = (...funcs) => {
  if (funcs.length === 1) {
    return funcs[0]
  }

  // 这里的 ...args 其实就是 flow(f1, f2, f3)(x) 的 x
  return funcs.reduce((resultFn, rightFn) => ((...args) => rightFn(resultFn(...args))))
}

export const composeLeft = flow