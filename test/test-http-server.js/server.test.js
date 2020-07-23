import { ServerApp } from '../../src'
import request from 'supertest'

it('should allow routes work', (done) => {
  const app = ServerApp.createApp()
  const server = app.getServer()

  app.get('/', (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('Home')
    res.end()
  })

  app.post('/api', (req, res) => {
    const data = req.body
    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(data)
    res.end()
  })

  request(server)
    .get('/')
    .expect(200)
    .expect('Content-Type', 'text/html')
    .end(done)

  request(server)
    .post('/api')
    .send({ name: 'hello' })
    .set('Accept', 'application/json')
    .expect('Content-Type', 'application/json')
    .expect(JSON.stringify({ name: 'hello' }))
    .expect(200)
    .end(done)

})