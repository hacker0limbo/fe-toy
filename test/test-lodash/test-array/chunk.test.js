import { chunk } from '../../../src'

it('chunk should split array', () => {
  expect(chunk([1, 2, 3, 4])).toEqual([[1], [2], [3], [4]])
  expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]])
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  expect(chunk([1, 2, 3, 4, 5], 3)).toEqual([[1, 2, 3], [4, 5]])
})