const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    const options = {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      }
    }

    server.get('/robots.txt', (req, res) =>
      res.status(200).sendFile('robots.txt', options)
    )
    server.get('/sitemap.xml', (req, res) =>
      res.status(200).sendFile('sitemap.xml', options)
    )

    server.get('/yamail-19022204412353193.html', (req, res) =>
      res.status(200).sendFile('yamail-19022204412353193.html', options)
    )

    server.get('/google5c8699c918f68947.html', (req, res) =>
      res.status(200).sendFile('google5c8699c918f68947.html', options)
    )

    server.get('/', (req, res) => {
      const actualPage = '/'
      return app.render(req, res, actualPage, req.params)
    })

    server.get('*', (req, res) => {
      // const actualPage = '/dev'
      // return app.render(req, res, actualPage, req.params)
      return handle(req, res)
    })

    server.listen(3030, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3030')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
