import { cache } from '../../src'

it('result should be cached if has been called', () => {
  const fn = jest.fn(function fib(n){
    // 1, 1, 2, 3, 5, 8, 13, 21
    if (n < 2) {
      return n
    }
    return fib(n-1) + fib(n-2)
  })

  const cachedFib = cache(fn)
  expect(cachedFib(5)).toBe(5)
  expect(cachedFib.cache).toEqual({ '5': 5 })
  expect(cachedFib(8)).toBe(21)
  expect(cachedFib.cache).toEqual({ '5': 5, '8': 21 })
})