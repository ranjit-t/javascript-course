alert("Hello, Welcome to our bar");

let beerStock = 10;
let wineStock = 10;

let numberOfBeers = 0;
let numberOfWines = 0;

function takeBeerOrder() {
  numberOfBeers = prompt("How many beers you want ?");

  if (beerStock < numberOfBeers) {
    alert(`our beer stock is only ${beerStock}`);
    takeBeerOrder();
  } else {
    beerStock = beerStock - numberOfBeers;
  }
}

function takeWineOrder() {
  numberOfWines = prompt("How many wines you want ?");

  if (wineStock < numberOfWines) {
    alert(`our wine stock is only ${wineStock}`);
    takeWineOrder();
  } else {
    wineStock = wineStock - numberOfWines;
  }
}

function billPrint(numBeer, numWine) {
  const beerPrice = 15;
  const winePrice = 30;
  const total = beerPrice * numBeer + winePrice * numWine;
  alert(
    `Ordered Beers = ${numBeer}, Ordered Wines = ${numWine} and total bill ${total}`
  );
}

//main

function attendCustomer() {
  takeBeerOrder();
  takeWineOrder();
  billPrint(numberOfBeers, numberOfWines);

  const newOrder = prompt("Do you want to exit ? if yes press x");

  if (newOrder !== "x") {
    attendCustomer();
  }
}

attendCustomer();
