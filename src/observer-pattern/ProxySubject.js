import { Subject } from './Subject'

export class ProxySubject extends Subject {
  constructor(state) {
    super(state)
    // 这里的 state 只能是一个对象或者数组
    this.state = new Proxy(state, {
      set = (target, key, value, receiver) => {
        const result = Reflect.set(target, key, value, receiver)
        this.notifyObservers(this.state)
        return result
      }
    })
  }

  setState(newState) {
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
}