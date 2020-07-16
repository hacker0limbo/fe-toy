import { flattenDeep } from '../../src'

it('flatten deep should flat array into one dimension', () => {
  expect(flattenDeep([1, [2, [3, [4]], 5]])).toEqual([1, 2, 3, 4, 5])
})