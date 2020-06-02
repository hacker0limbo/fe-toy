/**
 * @reference 
 * https://github.com/climba03003/EventEmitter
 * https://github.com/andywer/typed-emitter
 * https://zhuanlan.zhihu.com/p/77876876
 * https://github.com/JasonPollman/EventEmitter
 * https://rjzaworski.com/2019/10/event-emitters-in-typescript
 */
export class EventEmitter {
  constructor() {
    // listeners 用于存放事件监听函数, 格式如下
    // { event1: [f1, f2], event2: [f3] }
    this.listeners = {}
    this.maxListeners = 5
  }

  _insertListener(event, listener, position) {
    if (this.listeners[event] && this.listeners[event].length >= this.maxListeners) {
      throw console.error(`Max listeners are limit to ${this.maxListeners}`)
    }

    if (Array.isArray(this.listeners[event])) {
      if (this.listeners[event].indexOf(listener) === -1) {
        // 如果是不同的监听函数, 加入到数组里
        this.listeners[event].splice(position, 0, listener)
      }
    } else {
      // 该监听函数是第一个
      this.listeners[event] = [listener]
    }

    return this
  }

  addListener(event, listener) {
    return this._insertListener(event, listener, this.listeners[event].length)
  }

  get on() {
    // alias of addListener
    return this.addListener
  }

  removeListener(event, listener) {
    const index = this.listeners[event].indexOf(listener)
    if (index >= 0) {
      this.listeners[event].splice(index, 1)
    }
  }

  get off() {
    // alias of removeListener
    return this.removeListener
  }

  removeAllListeners(event) {
    this.listeners[event] = []
    return this
  }

  once(event, listener) {
    // once 监听一次之后在回调结束位置移除函数本身
    const _listener = (...args) => {
      // 这里的意思其实是, 把 _listener 这个函数引用通过 addListener 加入到 listeners
      // 此时 _listener 存于 listeners, 尚未被调用
      // 只有在触发 emit 的时候, 该 _listener 真正被调用, 调用结束之后被移除
      listener(...args)
      this.removeListener(event, _listener)
    }
    return this.addListener(event, _listener)
  }

  emit(event, ...args) {
    this.listeners[event].forEach(listener => {
      listener(...args)
    })
    return this
  }

  listeners(event) {
    return this.listeners[event] || []
  }

  prependListener(event, listener) {
    return this._insertListener(event, listener, 0)
  }

  prependOnceListener(event, listener) {
    const _listener = (...args) => {
      listener(...args)
      this.removeListener(event, _listener)
    }
    return this.prependListener(event, _listener)
  }

  setMaxListeners(num) {
    this.maxListeners = num
    return this
  }

  getMaxListeners() {
    return this.maxListeners
  }
}