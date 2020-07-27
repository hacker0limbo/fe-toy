export const tail = array => {
  if (array.length === 0) {
    return []
  }

  return array.slice(1, array.length)
}