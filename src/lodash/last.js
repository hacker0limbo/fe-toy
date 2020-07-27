export const last = array => {
  if (array.length === 0) {
    return []
  } 

  return array[array.length-1]
}