/**
 * 将一个字符串填充, 超出部分在右侧填充
 * @param {String} string 
 * @param {Number} length 
 * @param {String} chars 
 */
export const pad = (string='', length=0, chars=' ') => {
  if (length <= string.length) {
    return string
  }

  const leftLength = Math.floor((length - string.length) / 2) + string.length
  const leftPart = string.padStart(leftLength, chars)
  return leftPart.padEnd(length, chars)
}