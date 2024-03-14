function printSeries(max) {
  if (max === 0) {
    return;
  } else {
    console.log(max);
    printSeries(max - 1);
  }
}

printSeries(10);

function factorial(num) {
  if (num === 1) {
    return num;
  } // in recurcive, breaking point is neccessary
  return num * factorial(num - 1);
}

console.log(factorial(5));
