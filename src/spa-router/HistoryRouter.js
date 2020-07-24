/**
 * @reference
 * https://github.com/happylindz/blog/issues/4
 * 
 * @notes
 * history url 改变有三种情况
 * 1, 点击浏览器的前进或者后退(onpopstate 事件)
 * 2, 点击 a 标签
 * 3, js 代码中触发 history.push(replace)State
 * 
 * 其中 3 并不会触发 onpopstate 事件, 无法监听改变, 因而只能手动触发(可以重写 pushState 方法, 不推荐)
 * pushState vs replaceState: pushState 会记录 history 历史(点击回退有效), replaceState 无此功能(不推荐使用)
 */
export class HistoryRouter {
  constructor() {
    this.routes = {}
    this.currentUrl = ''
    this.init()
  }

  route(path, callback) {
    this.routes[path] = callback
  }

  updateView(url) {
    this.currentUrl = url
    if (typeof this.routes[this.currentUrl] === 'function') {
      this.routes[this.currentUrl]()
    }
  }

  bindLink() {
    // 对所有的 a 绑定覆盖事件, 规定 url 地址为 data-href="/home" 类似形式
    const allLinks = document.querySelectorAll('a[data-href]')
    for (let i = 0; i < allLinks.length; i++) {
      const link = allLinks[i]
      link.addEventListener('click', e => {
        e.preventDefault()
        const url = link.getAttribute('data-href')
        history.pushState({}, null, url)
        this.updateView(url)
      })
    }
  }

  init() {
    this.bindLink()
    // 用户刷新 load 页面的时候也更新视图
    window.addEventListener('load', e => {
      this.updateView(window.location.pathname)
    })

    window.addEventListener('popstate', e => {
      this.updateView(window.location.pathname)
    })
  }
}