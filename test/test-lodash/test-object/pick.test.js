import { pick } from '../../../src'

it('test pick', () => {
  const object = { 'a': 1, 'b': 2, 'c': 3 }
  expect(pick(object, 'a')).toEqual({ a: 1 })
  expect(pick(object, 'a', 'b')).toEqual({ a: 1, b: 2 })
  expect(pick(object, ['a'])).toEqual({ a: 1 })
  expect(pick(object, ['a', 'b'])).toEqual({ a: 1, b: 2 })
  expect(pick(object, ['a'], ['b'])).toEqual({ a: 1, b: 2 })
  expect(pick(object, 'a', ['b'])).toEqual({ a: 1, b: 2 })
  expect(pick(object, 'a', ['b'], 'c')).toEqual({ a: 1, b: 2, c: 3 })
  expect(pick(object, 'a', ['b', 'c'])).toEqual({ a: 1, b: 2, c: 3 })
})