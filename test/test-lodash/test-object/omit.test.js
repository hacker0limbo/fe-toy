import { omit } from '../../../src'

it('test omit', () => {
  const object = { 'a': 1, 'b': '2', 'c': 3 }
  expect(omit(object, ['a', 'c'], 'b')).toEqual({})
  expect(omit(object, ['a', 'c'])).toEqual({ 'b': '2' })
  expect(omit(object, 'a', 'c')).toEqual({ 'b': '2' })
  expect(omit(object, 'a', ['c'])).toEqual({ 'b': '2' })
  
})