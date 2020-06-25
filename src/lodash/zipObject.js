/**
 * 将两个数组打包
 * @param {array} props 
 * @param {array} values
 * @example
 * zipObject(['a', 'b'], [1, 2]) => { 'a': 1, 'b': 2 } 
 */
export const zipObject = (props, values) => {
  return props.reduce((result, prop, index) => {
    const value = values[index]
    return {
      ...result,
      [prop]: value
    }
  }, {})
}
