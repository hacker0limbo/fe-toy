import { intersection } from '../../../src'

it('intersection should accept >= 2 args', () => {
  const x = [1, 2, 3, 4, 6]
  const y = [2, 3, 5, 6, 8]
  const z = [4, 5, 6, 7, 8]

  expect(intersection(x)).toEqual([1, 2, 3, 4, 6])
  expect(intersection(x, y)).toEqual([2, 3, 6])
  expect(intersection(x, y, z)).toEqual([6])
  // 测试返回的数组是唯一的
  expect(intersection([2, 1, 2], [2, 3], [2, 4])).toEqual([2])
})