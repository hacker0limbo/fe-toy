/**
 * 得到一个字符串的所有子字符串
 * @param {String} str 
 */
export const subStrings = (str) => {
  const result = []
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      const subStr = str.slice(i, j)
      result.push(subStr)
    }
  }
  return result
}