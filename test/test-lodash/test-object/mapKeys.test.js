import { mapKeys } from '../../../src'

it('test mapKeys', () => {
  expect(mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
    return key + value;
  })).toEqual({ 'a1': 1, 'b2': 2 })
})
