import { omitBy } from "../../../src"

it('test omitBy', () => {
  const isNumber = n => typeof n === 'number'
  const object = { 'a': 1, 'b': '2', 'c': 3 }

  expect(omitBy(object, isNumber)).toEqual({ 'b': '2' })
})