import http from 'http'
import url from 'url'

export class App {
  constructor() {
    this.server = this.init()
    this.routeHandler = {
      '*': {
        'GET': this.notFound
      }
    }
  }

  static createApp() {
    const cls = this
    const app = new cls()
    return app
  }

  init() {
    return http.createServer((req, res) => {
      const pathname = url.parse(req.url).pathname
      const method = req.method.toUpperCase()
      if (typeof this.routeHandler?.[pathname]?.[method] === 'function') {
        this.routeHandler[pathname][method](req, res)
      } else {
        this.routeHandler['*'].GET(req, res)
      }
    })
  }

  route(pathname, method, callback) {
    if (typeof this.routeHandler[pathname] === 'object') {
      this.routeHandler[pathname][method.toUpperCase()] = callback
    } else {
      this.routeHandler[pathname] = {
        [method.toUpperCase()]: callback,
      }
    }
  }

  listen(...args) {
    this.server.listen(...args)
  }

  notFound(req, res) {
    res.writeHead(404, { "Content-Type": "text/html" })
    res.write("404 Not found")
    res.end()
  }
}

