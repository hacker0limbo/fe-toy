import { map } from '../../src'

it('map should accept both object and array and returns an array', () => {
  expect(map([1, 2, 3], (v, i, arr) => v + i + arr.length)).toEqual([4, 6, 8])
  expect(map({ a: 'a', b: 'b', c: 'c' }, (v, k, obj) => v + k + Object.keys(obj).length)).toEqual(['aa3', 'bb3', 'cc3'])
  expect(map({ a: 4, b: 8 }, v => v * v)).toEqual([16, 64])
})