/**
 * @reference 
 * https://dev.to/nishanbajracharya/implementing-the-observer-pattern-in-javascript-5heh
 */
export class Subject {
  constructor(state) {
    this.state = state
    this.observers = []
  }

  getState() {
    return this.state
  }

  setState(newState) {
    // 判断类型, 分为基础类型和对象类型
    if (typeof this.state !== 'object') {
      this.state = newState
    } else {
      if (Array.isArray(this.state)) {
        this.state = [
          ...this.state,
          newState
        ]
      } else {
        this.state = {
          ...this.state,
          newState
        }
      }
    }
    // 通知所有观察者
    this.notifyObservers(this.state)
  }

  registerObserver(observer) {
    this.observers.push(observer)
  }

  unregisterObserver(observer) {
    this.observers = this.observers.filter(o => o !== observer)
  }

  notifyObservers(state) {
    this.observers.forEach(observer => observer.update(state))
  }
}