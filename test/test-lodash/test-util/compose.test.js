import { compose } from "../../../src"

it('compose should call from right to left', () => {
  const square = x => x * x
  const add = (x, y) => x + y
  expect(compose(square, add)(1, 2)).toBe(9)
})