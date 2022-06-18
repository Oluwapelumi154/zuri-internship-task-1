const http = require('http')
const fs = require('fs')

const home = fs.readFileSync(`${__dirname}/pages/index.html`, 'utf-8')
const about = fs.readFileSync(`${__dirname}/pages/about.html`, 'utf-8')
const contact = fs.readFileSync(`${__dirname}/pages/contact.html`, 'utf-8')

const server = http.createServer((req, res) => {
  const pathName = req.url
  if (pathName === '/' || pathName === '/home') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(home)
  } else if (pathName === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(about)
  } else if (pathName === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(contact)
  }
})
server.listen(8000, '127.0.0.1', () => {
  console.log('Application running on port 8000')
})
