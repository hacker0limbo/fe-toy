import { pickBy } from '../../../src'

it('test pickBy', () => {
  const isNumber = n => typeof n === 'number'
  const object = { 'a': 1, 'b': '2', 'c': 3 }

  expect(pickBy(object, isNumber)).toEqual({ 'a': 1, 'c': 3 })
})