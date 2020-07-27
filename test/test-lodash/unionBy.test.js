import { unionBy } from '../../src'

it('union by should union arrays with callback allowed', () => {
  expect(unionBy([2.1], [1.2, 2.3], Math.floor)).toEqual([2.1, 1.2])
  expect(unionBy([2.1], [1.2, 2.3])).toEqual([2.1, 1.2, 2.3])
})