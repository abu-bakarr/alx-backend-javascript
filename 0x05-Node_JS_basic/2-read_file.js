const fileSystem = require('fs');

const countStudents =(path) => { 
  var stream = fileSystem.createReadStream(path)
  try {
   
    stream.pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
      console.log(row);
    })
   
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents
