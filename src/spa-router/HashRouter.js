/**
 * 只需要监听 onhashchange 即可
 */
export class HashRouter {
  constructor() {
    this.routes = {}
    this.currentUrl = ''
    this.init()
  }

  route(path, callback) {
    this.routes[path] = callback
  }

  updateView() {
    // location.hash 为 '#/home', 也存在 '' 情况
    this.currentUrl = location.hash.slice(1) || '/'
    if (typeof this.routes[this.currentUrl] === 'function') {
      this.routes[this.currentUrl]()
    }
  }

  init() {
    // 两个事件会引起 hash 改变, 一个为本身 hash 改变
    // 一个是刷新 load 页面的时候
    window.addEventListener('load', () => {
      this.updateView()
    })
    window.addEventListener('hashchange', () => {
      this.updateView()
    })
  }
}