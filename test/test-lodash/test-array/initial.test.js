import { initial } from '../../../src'

it('initial should return all except last elements', () => {
  expect(initial([])).toEqual([])
  expect(initial([1, 2, 3])).toEqual([1, 2])
})