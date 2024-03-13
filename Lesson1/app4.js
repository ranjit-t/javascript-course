function interestTeller(months, total, interestPerMonthPer100, calc) {
  //   const interest = calc(months,total, interestPerMonthPer100)
  console.log(
    `your interest is ${calc(months, total, interestPerMonthPer100)}`
  );
}

interestTeller(12, 200000, 2, interestCalculator);

function interestCalculator(months, total, interestPerMonthPer100) {
  return (total / 100) * interestPerMonthPer100 * months;
}
