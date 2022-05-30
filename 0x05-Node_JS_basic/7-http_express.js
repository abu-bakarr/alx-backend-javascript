const express = require('express')
const app = express()
const port = 1245
const data = require("./database.csv");

const countStudents = require("./3-read_file_async")
const students = countStudents(data);



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

app.get('/students', (req, res) => {
  res.send(students)
})


app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})