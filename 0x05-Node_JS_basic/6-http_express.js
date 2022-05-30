const express = require('express')
const app = express()
const port = 1245

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="utf-8">
  <title>ALX</title>
  </head>
  <body>
  <pre>Hello Holberton School!</pre>
  </body>
  </html>`)
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})