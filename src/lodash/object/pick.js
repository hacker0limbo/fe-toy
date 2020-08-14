/**
 * 根据 path 来选取需要的对象
 * @param {Object} object 
 * @param  {...(String|String[])} paths 
 */
export const pick = (object, ...paths) => {
  // 拿到完整的 paths
  const propertyPaths = paths.reduce((result, path) => {
    return typeof path === 'string' ? [...result, path] : [...result, ...path]
  }, [])

  return propertyPaths.reduce((obj, p) => {
    if (object.hasOwnProperty(p)) {
      return {
        ...obj,
        [p]: object[p]
      }
    }
  }, {})
}