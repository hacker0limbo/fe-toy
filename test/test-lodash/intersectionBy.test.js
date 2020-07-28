import { intersectionBy } from "../../src"

it('intersectionBy should accepts a callback for intersection', () => {
  expect(intersectionBy([2.1, 1.2], [2.3, 3.4])).toEqual([])
  expect(intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor)).toEqual([2.1])
  expect(intersectionBy([2.1, 1.2, 2.1], [2.3, 3.4], Math.floor)).toEqual([2.1])
})