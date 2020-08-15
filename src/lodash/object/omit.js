import { difference } from "../array"
import { pick } from './pick'

/**
 * 与 pick 相反, paths 为不包含的属性
 * @param {Object} object 
 * @param  {...String|String[]} paths 
 */
export const omit = (object, ...paths) => {
  const omitPaths = paths.reduce((result, path) => {
    return typeof path === 'string' ? [...result, path] : [...result, ...path]
  }, [])
 
  // 做一个差集, 用 pick 来做
  const pickPaths = difference(Object.keys(object), omitPaths)
  return pick(object, pickPaths)
}