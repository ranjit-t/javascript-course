let beerStock = 10;
let numberOfBeersOrder = 0;

let wineStock = 20;
let numberOfWinesOrder = 0;

function beerOrder() {
  let orderedItems = prompt(`how many beers do you want`);

  if (parseInt(orderedItems) > beerStock) {
    alert(`our stock of beers is only  ${beerStock}`);
    beerOrder();
  } else {
    numberOfBeersOrder = parseInt(orderedItems);
    beerStock = beerStock - numberOfBeersOrder;
  }
}

beerOrder();

alert(
  `you ordered ${numberOfBeersOrder} beers and now our beer stock is ${beerStock}`
);

function wineOrder() {
  let orderedItems = prompt(`how many wines do you want`);

  if (parseInt(orderedItems) > wineStock) {
    alert(`our stock of beers is only  ${wineStock}`);
    beerOrder();
  } else {
    numberOfWinesOrder = parseInt(orderedItems);
    wineStock = wineOrder - numberOfWinesOrder;
  }
}

wineOrder();

alert(
  `you ordered ${numberOfWinesOrder} wines and now our wine stock is ${wineStock}`
);
