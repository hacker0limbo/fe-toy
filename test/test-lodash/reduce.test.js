import { reduce } from '../../src'

it('reudce should accept both object and array, and returns a single final value', () => {
  expect(reduce([1, 2, 3], (result, v, i) => result + v + i)).toBe(9)
  expect(reduce([1, 2, 3], (result, v, i) => result + v + i, 0)).toBe(9)
  expect(reduce([1, 2, 3], (result, v, i) => result + v + i, 30)).toBe(39)
  expect(reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
      (result[value] || (result[value] = [])).push(key);
      return result;
    }, {})).toEqual({ 1: ["a", "c"], 2: ["b"]})
})