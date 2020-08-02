import { difference } from '../../../src'

it('difference should return an array of array values not included in the other given arrays', () => {
  expect(difference([2, 1], [2, 3], [4])).toEqual([1])
  expect(difference([2, 1, 1], [2, 3], [4])).toEqual([1, 1])
  expect(difference([2, 1], [2, 3], [4, 1])).toEqual([])
})