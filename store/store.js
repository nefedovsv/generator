const XLSX = require("xlsx");

const path = `${__dirname}/spreadsheet.xlsx`;

const workbook = XLSX.readFile(path);

const toolsSheetName = workbook.SheetNames[0];
const tarrifsSheetName = workbook.SheetNames[6];
const commoditiesExchangeSheetName = workbook.SheetNames[2];

const toolsCollection = XLSX.utils.sheet_to_json(
  workbook.Sheets[toolsSheetName],
  { raw: true }
);
const tarrifsCollection = XLSX.utils.sheet_to_json(
  workbook.Sheets[tarrifsSheetName],
  { raw: true }
);

const commoditiesExchangeCollection = XLSX.utils.sheet_to_json(
  workbook.Sheets[commoditiesExchangeSheetName],
  { raw: true }
);

const store = new Map();
store.set("tools", toolsCollection);
store.set("tarrifs", tarrifsCollection);
store.set("commoditiesExchange", commoditiesExchangeCollection);

module.exports = store;
