import { shallowCopy } from '../../src'

it('shallow copy should only copy one dimension', () => {
  const o = {
    a: 1,
    b: {
      b1: 2,
      b2: 3
    },
    c: ['c1', 'c2']
  }

  const copy = shallowCopy(o)
  o.a = 11
  o.b.b1 = 22
  o.c.push('c3')

  expect(copy.a).not.toBe(o.a)
  expect(copy.b.b1).toBe(o.b.b1)
  expect(copy.c).toHaveLength(3)
  expect(copy.c).toContain('c3')
})