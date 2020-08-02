import { filter } from '../../../src'

it('filter should return an array', () => {
  expect(filter([1, 2, 3, 4], (v, i, array) => v + i - array.length > 0)).toEqual([3, 4])
  expect(filter({ a: 1, b: 2 }, (v, k) => k !== 'a')).toEqual([2])
})