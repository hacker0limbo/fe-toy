import { last } from "../../../src"

it('last should return last element', () => {
  expect(last([1, 2, 3])).toBe(3)
  expect(last([])).toBeUndefined()

})