import { union } from './union'

/**
 * Creates an array of array values not included in the other given arrays
 * order determined by first array, may contains duplicate elements
 * @param  {...Array} arrays 
 */
export const difference = (...arrays) => {
  const [head, ...rest] = arrays
  return head.filter(e => !union(...rest).includes(e))
}