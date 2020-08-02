import { uniq } from '../../../src'

it('uniq should return array with no duplicate values', () => {
  expect(uniq([1, 2, 3, 3])).toEqual([1, 2, 3])
  expect(uniq([{ a: 1 }, { a: 1 }])).toEqual([{ a: 1 }, { a: 1 }])
})