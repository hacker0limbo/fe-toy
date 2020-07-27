import { union } from '../../src'

it('union should return an array with all no duplicates array', () => {
  expect(union([2], [1, 2], [1, 2, 3, 4])).toEqual([2, 1, 3, 4])
  expect(union([1, 2], [2, 1])).toEqual([1, 2])
})
