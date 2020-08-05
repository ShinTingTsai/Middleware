// app.js
const express = require('express')
const { response } = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  // const requestTime = Date.now()
  req.requestTime = Date.now()
  
  console.log("user request req.requestTime: ", req.requestTime);
  const question_1 = new Date(req.requestTime).toLocaleString() + ' | ' + req.method + " from " + req.path
  console.log("Q1: ", question_1)

  next()
})

app.get("/", (req, res) => {
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