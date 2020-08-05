// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  // Q1
  req.requestTime = Date.now()
  const question1 = new Date(req.requestTime).toLocaleString() + ' | ' + req.method + " from " + req.originalUrl
  console.log("[Question 1]", question1)
  // Q2
  res.on('finish', () => {
    const responseTime = Date.now()
    const period = responseTime - req.requestTime
    const question2 = question1 + " | total time: " + period + "ms"
    console.log('[Question 2] Server get request time: ', new Date(req.requestTime).toLocaleString())
    console.log('[Question 2] Server response time: ', new Date(responseTime).toLocaleString())
    console.log("[Question 2]", question2)
  })
  next()
})

app.get('/', (req, res) => {
  res.send("列出全部 Todo")
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})