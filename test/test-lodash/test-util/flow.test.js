import { flow } from "../../../src"

it('flow should call from left to right', () => {
  const square = x => x * x
  const add = (x, y) => x + y
  expect(flow(add, square)(1, 2)).toBe(9)
})