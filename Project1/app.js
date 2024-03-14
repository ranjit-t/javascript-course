const container = document.querySelector(".container");
const searchInput = document.querySelector("input");
// const searchButton = document.querySelector(".search-button");

const resetButton = document.querySelector(".reset-button");

const raghuVamsham = [
  { name: "Ram", age: 29 },
  { name: "Laxman", age: 28 },
  { name: "Bharat", age: 27 },
  { name: "Shatrugna", age: 26 },
];

function familyInsert(family) {
  family.forEach((person) => {
    const item = document.createElement("li");

    item.innerHTML = `Name : <b>${person.name}</b> Age : <b>${person.age}</b>`;

    container.appendChild(item);
  });
}

function clearList() {
  // searchInput.value = "";
  container.innerHTML = "";
}

familyInsert(raghuVamsham);

searchInput.addEventListener("input", () => {
  const searchedValue = searchInput.value;

  const filteredRaghuVamsham = raghuVamsham.filter(
    (person) =>
      person.name.toLowerCase().includes(searchedValue.toLowerCase()) ||
      person.age.toString().includes(searchedValue)
  );
  clearList();
  familyInsert(filteredRaghuVamsham);
});

resetButton.addEventListener("click", () => {
  searchInput.value = "";
  clearList();
  familyInsert(raghuVamsham);
});
