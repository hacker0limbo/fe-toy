import { subStrings } from '../../../src'

it('test subStrings', () => {
  expect(subStrings('a')).toEqual(['a'])
  expect(subStrings('abc')).toEqual(['a', 'ab', 'abc', 'b', 'bc', 'c'])
})