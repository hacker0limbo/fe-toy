export class App {
  constructor() {
    this.server = this.init()
    this.routeHandler = {
      '/': xxx
    }
  }

  static createServer() {
    const app = new cls()
    return app.server
  }

  init() {
    return http.createServer((req, res) => {
      const pathname = url.parse(req)
      this.routeHandler[pathname](req, res)
    })
  }

  route(pathname, callback) {
    this.routeHandler[pathname] = callback
  }
}
