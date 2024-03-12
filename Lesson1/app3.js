//passing only numbers, function then calculating

function billPrint(numBeer, numWine, billCalc) {
  const total = billCalc(numBeer, numWine);

  console.log(
    `Ordered Beers = ${numBeer}, Ordered Wines = ${numWine} and total bill ${total}`
  );
}

function calc1(numBeer, numWine) {
  const beerPrice = 10;
  const winePrice = 20;
  const total = beerPrice * numBeer + winePrice * numWine;
  return total;
}

billPrint(2, 3, calc1);

//passing only numbers

function billPrint(numBeer, numWine, total) {
  console.log(
    `Ordered Beers = ${numBeer}, Ordered Wines = ${numWine} and total bill ${total}`
  );
}

function calc1(numBeer, numWine) {
  const beerPrice = 10;
  const winePrice = 20;
  const total = beerPrice * numBeer + winePrice * numWine;
  return total;
}

billPrint(2, 3, calc1(2, 3));
