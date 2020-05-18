const express = require('express');
const next = require('next');
const request = require('request')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all(/\/new_ezding\//, (req,res)=>{
    let url = 'https://www.ezding.com.tw' + req.url;
    req.pipe(request(url)).pipe(res);
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})