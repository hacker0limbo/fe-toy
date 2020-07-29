/**
 * 对一个函数做缓存
 * @param {Function} wrapped 
 * @reference https://realpython.com/primer-on-python-decorators/
 * @example
 * cache(fn)(...args)
 */
export const cache = (wrapped) => {
  const wrapperCache = (...args) => {
    const key = args.join('')
    if (!wrapperCache.cache.hasOwnProperty(key)) {
      wrapperCache.cache[key] = wrapped(...args)
    }
    return wrapperCache.cache[key]
  }
  wrapperCache.cache = {}
  return wrapperCache
}