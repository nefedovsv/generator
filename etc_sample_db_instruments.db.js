const { dbContentCollection } = require("./index");

dbContentCollection.forEach((item) => item);
console.log(dbContentCollection[0]);

console.log(typeof new Date("2020-04-23T09:13:44"));

/*db.instruments.insert({
  shipmentBasis: "ALL",
  instrumentCode: "A592ALL060F",
  instrumentName: "Бензин (АИ-92-К5) по ГОСТ, ст. Аллагуват (ст. отпр.)",
  instrumentNameEng: "Gasoline 92, station Allaguvat (free into wagon)",
  commodity: "A592",
  lotSize: "60",
  deliveryMethod: "F",
  amount: {
    current: 120,
    forecast: 480,
  },
  quote: {
    time: new Date("2020-03-24T12:47:57"),
    bestBuyPrice: 40800,
    bestBuyAmount: 240,
    bestSellPrice: 0,
    bestSellAmount: 0,
    lastDealPrice: 41000,
    lastDealAmount: 120,
  },
  tarrifs: [
    {
      destinationBasis: "OMV",
      price: 3602,
      shipmentTime: 14,
      travelTime: 8,
    },
  ],
  tradingStartUTCMinutes: 842,
  deals: [
    {
      dealId: "10000455502",
      timestamp: new Date("2020-03-24T11:00:01"),
      price: 40218,
      amount: 180,
    },
  ],
});

db.instruments.insert({
  shipmentBasis: "SAU",
  instrumentCode: "A592SAU060F",
  instrumentName:
    "Бензин (АИ-92-К5) по ГОСТ, Самара-группа станций (ст. отпр.)",
  instrumentNameEng: "Gasoline 92, group of stations Samara (free into wagon)",
  commodity: "A592",
  lotSize: "60",
  deliveryMethod: "F",
  amount: {
    current: 600,
    forecast: 480,
  },
  quote: {
    time: new Date("2020-03-24T12:47:57"),
    bestBuyPrice: 41750,
    bestBuyAmount: 420,
    bestSellPrice: 0,
    bestSellAmount: 0,
    lastDealPrice: 41601,
    lastDealAmount: 60,
  },
  tarrifs: [
    {
      destinationBasis: "OMV",
      price: 4277,
      shipmentTime: 14,
      travelTime: 9,
    },
  ],
  tradingStartUTCMinutes: 842,
  deals: [
    {
      dealId: "10000455417",
      timestamp: new Date("2020-03-24T11:00:01"),
      price: 40931,
      amount: 60,
    },
  ],
});

db.instruments.insert({
  shipmentBasis: "UFM",
  instrumentCode: "A592ALM060F",
  instrumentName: "Бензин (АИ-92-К5) по ГОСТ, Уфа-группа станций (ст. отпр.)",
  instrumentNameEng: "Gasoline 92, group of stations Ufa (free into wagon)",
  commodity: "A592",
  lotSize: "60",
  deliveryMethod: "F",
  amount: {
    current: 0,
    forecast: 480,
  },
  quote: {
    time: new Date("2020-03-24T11:00:02"),
    bestBuyPrice: 40900,
    bestBuyAmount: 300,
    bestSellPrice: 0,
    bestSellAmount: 0,
    lastDealPrice: 40850,
    lastDealAmount: 60,
  },
  tarrifs: [
    {
      destinationBasis: "OMV",
      price: 3251,
      shipmentTime: 14,
      travelTime: 8,
    },
  ],
  tradingStartUTCMinutes: 842,
  deals: [
    {
      dealId: "10000455415",
      timestamp: new Date("2020-03-24T11:00:01"),
      price: 40300,
      amount: 60,
    },
  ],
});

db.instruments.insert({
  shipmentBasis: "NOV",
  instrumentCode: "A592ALM060F",
  instrumentName: "Бензин (АИ-92-К5) по ГОСТ, ст. Новая Еловка (ст. отпр.)",
  instrumentNameEng: "Gasoline 92, station Novaya Elovka (free into wagon)",
  commodity: "A592",
  lotSize: "60",
  deliveryMethod: "F",
  amount: {
    current: 1200,
    forecast: 560,
  },
  quote: {
    time: new Date("2020-03-24T11:00:02"),
    bestBuyPrice: 43325,
    bestBuyAmount: 60,
    bestSellPrice: 0,
    bestSellAmount: 0,
    lastDealPrice: 43920,
    lastDealAmount: 60,
  },
  tarrifs: [
    {
      destinationBasis: "OMV",
      price: 3153,
      shipmentTime: 14,
      travelTime: 7,
    },
  ],
  tradingStartUTCMinutes: 842,
  deals: [
    {
      dealId: "10000455427",
      timestamp: new Date("2020-03-24T11:00:01"),
      price: 43211,
      amount: 60,
    },
  ],
});

db.instruments.insert({
  shipmentBasis: "STI",
  instrumentCode: "A592ALM060F",
  instrumentName: "Бензин (АИ-92-К5) по ГОСТ, ст. Стенькино II (ст. отпр.)",
  instrumentNameEng: "Gasoline 92, station Sten'kino 2 (free into wagon)",
  commodity: "A592",
  lotSize: "60",
  deliveryMethod: "F",
  amount: {
    current: 120,
    forecast: 180,
  },
  quote: {
    time: new Date("2020-03-24T11:00:02"),
    bestBuyPrice: 43100,
    bestBuyAmount: 360,
    bestSellPrice: 43400,
    bestSellAmount: 60,
    lastDealPrice: 43040,
    lastDealAmount: 120,
  },
  tarrifs: [
    {
      destinationBasis: "OMV",
      price: 5497,
      shipmentTime: 14,
      travelTime: 12,
    },
  ],
  tradingStartUTCMinutes: 842,
  deals: [
    {
      dealId: "10000455432",
      timestamp: new Date("2020-03-24T11:00:01"),
      price: 42635,
      amount: 60,
    },
  ],
});

db.instruments.insert({
  shipmentBasis: "KOB",
  instrumentCode: "A592KOB060F",
  instrumentName: "Бензин (АИ-92-К5) по ГОСТ, ст. Комбинатская (ст. отпр.)",
  instrumentNameEng: "Gasoline 92, station Kombinatskaya (free into wagon)",
  commodity: "A592",
  lotSize: "60",
  deliveryMethod: "F",
  amount: {
    current: 60,
    forecast: 240,
  },
  quote: {
    time: new Date("2020-03-24T11:00:02"),
    bestBuyPrice: 41860,
    bestBuyAmount: 60,
    bestSellPrice: 0,
    bestSellAmount: 0,
    lastDealPrice: 41711,
    lastDealAmount: 60,
  },
  tarrifs: [
    {
      destinationBasis: "OMV",
      price: 715,
      shipmentTime: 14,
      travelTime: 5,
    },
  ],
  tradingStartUTCMinutes: 842,
  deals: [
    {
      dealId: "10000455653",
      timestamp: new Date("2020-03-24T11:16:49"),
      price: 41000,
      amount: 60,
    },
  ],
});

db.instruments.insert({
  shipmentBasis: "LUL",
  instrumentCode: "A592LUL060F",
  instrumentName:
    "Бензин (АИ-92-К5) по ГОСТ, Волгоград-группа станций (ст. отпр.)",
  instrumentNameEng:
    "Gasoline 92, group of stations Volgograd (free into wagon)",
  commodity: "A592",
  lotSize: "60",
  deliveryMethod: "F",
  amount: {
    current: 1800,
    forecast: 120,
  },
  quote: {
    time: new Date("2020-03-24T11:00:02"),
    bestBuyPrice: 43821,
    bestBuyAmount: 60,
    bestSellPrice: 0,
    bestSellAmount: 0,
    lastDealPrice: 44100,
    lastDealAmount: 120,
  },
  tarrifs: [
    {
      destinationBasis: "OMV",
      price: 5497,
      shipmentTime: 12,
      travelTime: 9,
    },
  ],
  tradingStartUTCMinutes: 842,
  deals: [
    {
      dealId: "10000455452",
      timestamp: new Date("2020-03-24T11:00:01"),
      price: 43400,
      amount: 60,
    },
  ],
});
*/
