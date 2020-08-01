import { pad } from '../../../src'

it('pad should equally spit strings', () => {
  expect(pad('abc', 8)).toEqual('  abc   ')
  expect(pad('abc', 2)).toBe('abc')
  expect(pad('abc', 8, '_-')).toBe('_-abc_-_')
})