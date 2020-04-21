/*const csv = require("csv-parser");
const fs = require("fs");
const fsPromises = require("fs").promises;

async function parse(path) {
  return new Promise((resolve) => {
    const results = [];
    fs.createReadStream(path)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        console.log(results[0]);
        resolve(results[0]);
      });
  });
}

const main = async () => {
  const res = await parse("basis.csv");
  console.log(res);
};

main().catch(console.error);
*/
