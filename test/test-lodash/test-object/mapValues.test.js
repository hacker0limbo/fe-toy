import { mapValues } from "../../../src"

it('test mapValues', () => {
  const users = {
    'fred': { 'user': 'fred', 'age': 40 },
    'pebbles': { 'user': 'pebbles', 'age': 1 }
  }

  expect(mapValues(users, function(o) { return o.age })).toEqual({ 'fred': 40, 'pebbles': 1 })
})