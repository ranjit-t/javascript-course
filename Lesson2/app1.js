alert("welcome to our bar");

let beerStock = 10;
let numberOfBeersOrder = 0;

let wineStock = 20;
let numberOfWinesOrder = 0;

function orderTaker(itemName, stock) {
  let orderedItems = prompt(`how many ${itemName} do you want`);

  if (parseInt(orderedItems) > stock) {
    alert(`our stock of ${itemName} is only  ${stock}`); // stops and returns undefined
    return null;
  } else {
    return parseInt(orderedItems);
  }
} //pure function never modify any values outside its scope, but takes arguments and returns a value

function beerOrder() {
  const beersOrdered = orderTaker("Beers", beerStock);
  if (beersOrdered !== null) {
    numberOfBeersOrder = beersOrdered;
    beerStock = beerStock - numberOfBeersOrder;
  } else {
    beerOrder();
  }
} // impure function

function wineOrder() {
  let winesOrdered = orderTaker("Wines", wineStock);

  if (winesOrdered !== null) {
    numberOfWinesOrder = winesOrdered;
    wineStock = wineStock - numberOfWinesOrder;
  } else {
    wineOrder();
  }
}

beerOrder();

alert(
  `you ordered ${numberOfBeersOrder} beers and now our beer stock is ${beerStock}`
);

wineOrder();

alert(
  `you ordered ${numberOfWinesOrder} wines and now our wine stock is ${wineStock}`
);
