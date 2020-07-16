import { groupBy } from '../../src'

it('groupby should group by callback value', () => {
  expect(groupBy([6.1, 4.2, 6.3], Math.floor)).toEqual({ '4': [4.2], '6': [6.1, 6.3] })
})