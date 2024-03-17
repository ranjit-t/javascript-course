const body = document.querySelector("body");

//framework called NEAT
function NeatInject(label, text, click) {
  const elem = document.createElement(label);
  elem.innerText = text;
  body.appendChild(elem);

  elem.addEventListener("click", () => {
    click();
  });
}

// another js file using neat framework

let x = 0;
NeatInject("div", `Count ${x}`, () => {});
NeatInject("button", "increase", () => {
  x = x + 1;
});
