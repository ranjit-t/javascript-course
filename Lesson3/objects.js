const person = {
  name: "Ram",
  age: 28,
  city: "ayondhya",
};

// console.log(person);

//accessing

let candidate = person.name;

//addition

person.country = "India";

console.log(person);

//deletion

// delete person.country;

console.log(person);

console.log(person.father); //undefined

function Greeting(candidate) {
  const { age, name } = candidate;

  console.log(`The candidate name is ${name} and age is ${age} `);
}

Greeting(person);

let data = [
  { name: "Ranjit", age: 29 },
  { name: "Achyut", age: 29 },
  { name: "Ram", age: 29 },
];
