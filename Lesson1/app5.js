function interestTeller(months, total, calc) {
  console.log(`your interest is ${calc(total, months)}`);
}

function interestCalculator2rs(asalu, nenalu) {
  return (asalu / 100) * 2 * nenalu;
}

function interestCalculator4rs(asalu, nenalu) {
  return (asalu / 100) * 4 * nenalu;
}

interestTeller(12, 100000, interestCalculator2rs);

interestTeller(12, 100000, interestCalculator4rs);
