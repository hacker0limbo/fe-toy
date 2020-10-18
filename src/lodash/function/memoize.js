export const memoize = func => {
  const cache = {}
  return (...args) => {
    const key = JSON.stringify(args)
    if (cache.hasOwnProperty(key)) {
      return cache[key]
    }
    const value = func(...args)
    cache[key] = value
    return value
  }
}