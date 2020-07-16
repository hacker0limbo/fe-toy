import { flatten } from '../../src'

it('flatten should only flat one dimension', () => {
  expect(flatten([1, [2, [3, [4]], 5]])).toEqual([1, 2, [3, [4]], 5])
})