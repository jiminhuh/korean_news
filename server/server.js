const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/', (req, res) => {
  res.sendFile('/Users/jiminhuh/Source/korean_news/html/index.html');
})

app.get('/about', (req, res) => {
    res.send("About Page")
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})