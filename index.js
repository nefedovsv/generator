const fs = require("fs");
const store = require("./store/store");
const {
  getRandomInt,
  initializeDealsCollection,
  initializeTarrifsCollection,
  generateInstrumentName,
  getRandomData,
} = require("./utils/utils");

class DBObject {
  constructor(toolDefinition) {
    const tools = toolDefinition;
    const tarrifs = store.get("tarrifs");
    const commoditiesExchange = store.get("commoditiesExchange");
    this.shipmentBasis = tools["Базис поставки_1"];
    this.instrumentCode = tools["Код инструмента"];
    this.instrumentName = generateInstrumentName(
      commoditiesExchange,
      tools["Базис поставки"],
      tools["Код товара"]
    );
    this.instrumentNameEng = null;
    this.commodity = tools["Код товара"];
    this.lotSize = tools["Размер лота"];
    this.deliveryMethod = tools["Способ поставки"];
    this.amount = {
      current: getRandomInt(0, 10) * 60,
      forecast: getRandomInt(6, 20) * 60,
    };
    this.quote = {
      time: getRandomData(),
      bestBuyPrice: getRandomInt(40000, 50000),
      bestBuyAmount: getRandomInt(1, 4) * 60,
      bestSellPrice: getRandomInt(40000, 50000),
      bestSellAmount: getRandomInt(1, 4) * 60,
      lastDealPrice: getRandomInt(40000, 50000),
      lastDealAmount: getRandomInt(1, 4) * 60,
    };
    this.tarrifs = initializeTarrifsCollection(tarrifs);
    this.tradingStartUTCMinutes = getRandomInt(480, 510);
    this.deals = initializeDealsCollection(5);
  }
}

const dbContentCollection = [];

const toolsCollection = store.get("tools");

toolsCollection.forEach((toolDefinition) => {
  const dbObject = new DBObject(toolDefinition);
  const serializeDbObject = `
db.instrument.insert(${JSON.stringify(dbObject)});`;
  dbContentCollection.push(serializeDbObject);
});

const timestampPattern = /\"(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})\"/g;
const output = dbContentCollection
  .join("\n")
  .replace(timestampPattern, `new Date("$1")`);
fs.writeFileSync("output.js", output);

exports.dbContentCollection = dbContentCollection;
