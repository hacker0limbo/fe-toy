import { reduce } from '../../src'

it('reudce should accept both object and array', () => {
  expect(reduce([1, 2, 3], (result, v, i) => result + v + i)).toBe()
  
})