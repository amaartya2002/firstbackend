require('dotenv').config()

const express = require('express')

const app = express()

const port = 3000

app.get("/", (req, res) => {
  res.send("Hello from the source")
})

app.get("/login", (req, res) => {
  res.send('<h1>Please login to my first backend project</h1>')
})

app.get("/instagram", (req, res) => {
  res.send("me.amartya_")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on ${port}`)
})