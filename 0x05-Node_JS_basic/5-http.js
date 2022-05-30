const http = require("http");
const data = require("./database.csv");

const countStudents = require("./3-read_file_async")
const students = countStudents(data);

const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/":
      res.writeHead(200);
      res.end("Hello Holberton School!");
        break
    case "/students":
        res.writeHead(200);
        res.end(students);
        break
}
 
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});