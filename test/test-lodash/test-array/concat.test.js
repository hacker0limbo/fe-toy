import { concat } from '../../../src'

it('concat should link with other values and return a new array', () => {
  const array = [1]
  expect(concat(array, 2, [3], [[4]])).toEqual([1, 2, 3, [4]])
  expect(array).toEqual([1])
})