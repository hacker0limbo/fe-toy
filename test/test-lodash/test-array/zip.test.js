import { zip } from '../../../src'

it('zip should return two dimension array', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([['a', 1, true], ['b', 2, false]])
})