const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const initializeDealsCollection = (dealsAmount) => {
  const dealsCollection = [];
  for (let i = 1; i <= dealsAmount; i++) {
    dealsCollection.push({
      dealId: getRandomInt(10000155502, 10000955502),
      timestamp: getRandomData(),
      price: getRandomInt(40000, 50000),
      amount: getRandomInt(1, 4) * 60,
    });
  }
  return dealsCollection;
};

const initializeTarrifsCollection = (tarrifs) => {
  const tarrifsCollection = tarrifs.map((tarrifs) => ({
    destinationBasis: tarrifs.destinationBasis,
    price: getRandomInt(3000, 10000),
    shipmentTime: getRandomInt(12, 20),
    travelTime: getRandomInt(7, 17),
  }));
  return tarrifsCollection;
};

const upperFirst = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const generateInstrumentName = (
  commoditiesExchange,
  pointOfDeparture,
  productCode
) => {
  const productDefinition = commoditiesExchange.filter(
    (commoditie) => commoditie["Код товара"] === productCode
  );

  return `${upperFirst(productDefinition[0]["Наименование товара"])} по ${
    productDefinition[0]["Нормативный документ"]
  },  ${pointOfDeparture} (ст. отпр.)`;
};

const getRandomData = () => {
  const month = getRandomInt(1, 5);
  const day = getRandomInt(10, 28);
  const hour = getRandomInt(8, 9);
  const minute = getRandomInt(10, 60);
  const second = getRandomInt(10, 60);
  const data = `2020-0${month}-${day}T0${hour}:${minute}:${second}`;

  return data;
};

module.exports = {
  getRandomInt,
  initializeDealsCollection,
  initializeTarrifsCollection,
  generateInstrumentName,
  getRandomData,
};
