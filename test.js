db.instruments.insert({
  shipmentBasis: "STI",
  instrumentCode: "A100STI060F",
  instrumentName:
    "Бензин (АИ-100-К5) по СТО 44905015-005-2017,  ст. Стенькино 2 (ст. отпр.)",
  instrumentNameEng: null,
  commodity: "A100",
  lotSize: "60",
  deliveryMethod: "F",
  amount: { current: 360, forecast: 960 },
  quote: {
    time: "new Date(2020-02-19T08:41:14)",
    bestBuyPrice: 42590,
    bestBuyAmount: 180,
    bestSellPrice: 43777,
    bestSellAmount: 240,
    lastDealPrice: 44140,
    lastDealAmount: 240,
  },
  tarrifs: [
    { destinationBasis: 831203, price: 7488, shipmentTime: 15, travelTime: 16 },
    { destinationBasis: 918500, price: 9723, shipmentTime: 20, travelTime: 15 },
    { destinationBasis: 918604, price: 3107, shipmentTime: 18, travelTime: 9 },
    { destinationBasis: 919202, price: 8968, shipmentTime: 18, travelTime: 17 },
  ],
  tradingStartUTCMinutes: 510,
  deals: [
    {
      dealId: 10000756717,
      timestamp: "new Date(2020-04-21T08:26:53)",
      price: 41275,
      amount: 180,
    },
    {
      dealId: 10000855721,
      timestamp: "new Date(2020-03-24T08:24:37)",
      price: 40382,
      amount: 60,
    },
    {
      dealId: 10000942028,
      timestamp: "new Date(2020-02-23T09:37:42)",
      price: 43013,
      amount: 180,
    },
    {
      dealId: 10000272478,
      timestamp: "new Date(2020-05-23T09:40:41)",
      price: 40338,
      amount: 180,
    },
    {
      dealId: 10000873001,
      timestamp: "new Date(2020-03-14T08:19:40)",
      price: 41892,
      amount: 60,
    },
  ],
});
