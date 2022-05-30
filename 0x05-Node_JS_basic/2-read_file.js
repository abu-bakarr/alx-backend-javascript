const fs = require("fs");
const readline = require("readline");



const countStudents =(path) => { 
  var stream = fs.createReadStream(path);
  try {
    const rl = readline.createInterface({ input: stream });
    let data = [];
     
    rl.on("line", (row) => {
        data.push(row.split(","));
    });
     
    rl.on("close", () => {
        console.log(data);
    });
   
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents
