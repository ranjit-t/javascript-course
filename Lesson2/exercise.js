const countText = document.querySelector(".count-text");
const incBtn = document.querySelector(".inc-btn");
const decBtn = document.querySelector(".dec-btn");

let count = 0;

incBtn.addEventListener("click", () => {
  count = calc("inc", countText, count);
});

decBtn.addEventListener("click", () => {
  count = calc("dec", countText, count);
});

function calc(operation, htmlElement, myCount) {
  if (operation === "inc") {
    myCount = myCount + 1;
  } else {
    myCount = myCount - 1;
  }
  htmlElement.innerText = myCount;
  return myCount;
}

// const countText = document.querySelector(".count-text");
// const secondCountText = document.querySelector(".second-count-text");

// const incBtn = document.querySelector(".inc-btn");
// const decBtn = document.querySelector(".dec-btn");

// let count = 0;
// let secondCount = 0;

// incBtn.addEventListener("click", () => {
//   count = calc("inc", countText, count);
// });

// decBtn.addEventListener("click", () => {
//   secondCount = calc("dec", secondCountText, secondCount);
// });

// function calc(operation, htmlElement, myCount) {
//   if (operation === "inc") {
//     myCount = myCount + 1;
//   } else {
//     myCount = myCount - 1;
//   }
//   htmlElement.innerText = myCount;
//   return myCount;
// }
