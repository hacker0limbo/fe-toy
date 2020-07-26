export const filter = (collection, callback) => {
  const result = []
  Object.entries(collection).forEach(([k, v]) => {
    if (callback(v, Array.isArray(collection) ? parseInt(k) : k, collection)) {
      result.push(v)
    }
  })
  return result
}