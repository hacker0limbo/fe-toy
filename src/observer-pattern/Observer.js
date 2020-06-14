/**
 * https://dev.to/nishanbajracharya/implementing-the-observer-pattern-in-javascript-5heh
 */
export class Observer {
  constructor(subject) {
    this.subject = subject
    this.handlers = []

    this.subject.registerObserver(this)
  }

  subscribe(handler) {
    this.handlers.push(handler)
  }

  update(state) {
    this.handlers.forEach(handler => handler(state))
  }
}