import { tail } from "../../src"

it('tail should return all elements except the first one', () => {
  expect(tail([])).toEqual([])
  expect(tail([1, 2, 3])).toEqual([2, 3])
})