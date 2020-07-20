import { combineReducers } from '../../src'

it('combine reducers should return a function for all reducers state', () => {

  const counter = (state=0, action={}) => {
    switch(action.type) {
      case 'INCREMENT':
        return state + 1
      case 'DECREMENT':
        return state - 1
      default:
        return state
    }
  }

  const todos = (state=[], action={}) => {
    switch(action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          { 
            id: state.length + 1,
            text: action.text,
            completed: false,
          }
        ]
      case 'DELETE_TODO':
        return state.filter(todo => todo.id !== action.id)
      case 'TOOGLE_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            return {
              ...todo,
              completed: !todo.completed
            }
          }
          return todo
        })
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
    counter,
    todos
  })

  const initialState = rootReducer()
  expect(initialState).toEqual({ counter: 0, todos: [] })
  const incState = rootReducer(initialState, { type: 'INCREMENT' })
  expect(incState).toEqual({ counter: 1, todos: [] })
  const addTodoState = rootReducer(incState, { type: 'ADD_TODO', text: 'test text' })
  expect(addTodoState).toEqual({ counter: 1, todos: [{ id: 1, text: 'test text', completed: false }] })
  const toogleTodoState = rootReducer(addTodoState, { type: 'TOOGLE_TODO', id: 1 })
  expect(toogleTodoState).toEqual({ counter: 1, todos: [{ id: 1, text: 'test text', completed: true }] })
  const deleteTodoState = rootReducer(toogleTodoState, { type: 'DELETE_TODO', id: 1 })
  expect(deleteTodoState).toEqual({ counter: 1, todos: [] })
})