import { zipObject } from "../../src"

it('zipObject should zip two arrays into an object', () => {
  expect(zipObject(['a', 'b'], [1, 2])).toEqual({ 'a': 1, 'b': 2 })
})