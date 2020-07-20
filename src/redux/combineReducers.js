/**
 * 讲一个包含多个 reducer 的对象 { r1, r2 } 集合成一个 reducer
 * @param {Object} reducers
 */
export const combineReducers = (reducers) => {
  return (state, action) => {
    return Object.keys(reducers).reduce((nextState, key) => {
      nextState[key] = typeof state !== 'undefined'
        ? reducers[key](state[key], action) 
        : reducers[key]()
      return nextState
    }, {})
  }
}