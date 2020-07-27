export const initial = (array) => {
  if (array.length === 0) {
    return []
  } 

  return array.slice(0, -1)
}