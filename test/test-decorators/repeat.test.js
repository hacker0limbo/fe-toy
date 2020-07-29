import { repeat } from '../../src'

it('repeat should repeat function calls mutiple times', () => {
  const fn = jest.fn((x) => x + 1)

  const result = repeat(3)(fn)(5)
  expect(result).toEqual([6, 6, 6])
  expect(fn.mock.calls.length).toBe(3)
})