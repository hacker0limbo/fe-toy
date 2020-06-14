import { EventEmitter } from '../../src'

let eventEmitter

beforeEach(() => {
  eventEmitter = new EventEmitter()
})

afterEach(() => {
  eventEmitter = null
})

it('test max listeners', () => {
  expect(eventEmitter.getMaxListeners()).toBe(5)
})