const fs = require('fs');
const getStream = require('get-stream');
const parse = require('csv-parse');

readCSVData = async (filePath) => {
  const parseStream = parse({delimiter: ','});
  const data = await getStream.array(fs.createReadStream(filePath).pipe(parseStream));
  return data.map(line => line.join(',')).join('\n');
}
