function BillPrint(beer, wine, billCalculator) {
  console.log(beer, wine, billCalculator);

  const bill = billCalculator(beer, wine);
  console.log(`Your bill is ${bill} rupees`);
}

function calc1(beer, wine) {
  const beerPrice = 10;
  const winePrice = 20;
  const total = beerPrice * beer + winePrice * wine;
  return total;
}

function calc2(beer, wine) {
  console.log("Executing");
  const beerPrice = 15;
  const winePrice = 30;
  const total = beerPrice * beer + winePrice * wine;
  return total;
}

BillPrint(2, 3, calc2(2, 3)); //calc2(2, 3) returns 120

BillPrint(2, 3, calc2); // passing the function without executing

//
//
// functions always return undefined, if we are not returning anything
