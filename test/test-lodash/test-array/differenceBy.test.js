import { differenceBy } from "../../../src"

it('should return an array with callback called when doing difference', () => {
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], [1.1])).toEqual([2.1, 1.2])
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], [1.1], Math.floor)).toEqual([])
  expect(differenceBy([2.1, 1.2], [2.3, 3.4], [4.1], Math.floor)).toEqual([1.2])
  expect(differenceBy([2.1, 1.2, 1.2], [2.3, 3.4], Math.floor)).toEqual([1.2, 1.2])
})