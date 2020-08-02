import { head } from '../../../src'

it('head should return first element or undefined', () => {
  expect(head([])).toBeUndefined()
  expect(head([1, 2, 3])).toBe(1)
})