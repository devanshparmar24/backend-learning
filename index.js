require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/login', (req, res) =>{
    res.send("Log in at my page")
})

app.get('/ready', (req, res) => {
  res.send('OK')
})

app.get('/youtube', (req, res) =>{
    res.send("<h1>This is not funny</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
