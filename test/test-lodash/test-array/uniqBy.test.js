import { uniqBy } from '../../../src'

it('uniqBy should return an array with no duplicate values with callback called', () => {
  expect(uniqBy([2.1, 1.2, 2.3, 1.7], Math.floor)).toEqual([2.1, 1.2])
})