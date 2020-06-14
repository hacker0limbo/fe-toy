import { deepCopy } from '../../src'

it('deep copy should copy all dimenstions', () => {
  const o = {
    a: 1,
    b: {
      b1: 2,
      b2: 3,
      b3: {
        b31: 4
      }
    },
    c: ['c1', 'c2', { c3: 'c3' }]
  }

  const copy = deepCopy(o)
  o.a = 11
  o.b.b2 = 33
  o.b.b3.b31 = 44
  o.b.b4 = 'b4'
  o.c.push('c4')
  o.c[2].c3 = 'c33'

  expect(copy.a).not.toBe(o.a)
  expect(copy.b.b2).not.toBe(o.b.b2)
  expect(copy.b.b3.b31).not.toBe(o.b.b3.b31)
  expect(copy.b).not.toHaveProperty('b4', o.b.b4)
  expect(copy.c).toHaveLength(3)
  expect(copy.c).not.toContain('c4')
  expect(copy.c[2].c3).not.toBe(o.c[2].c3)
})