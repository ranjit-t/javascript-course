// function Greeting1(greeting, name) {
//   console.log(`${greeting}, ${name} !!!, this is your 3rd Lesson`);
// }

// Greeting1("Hey", "Laxman");

// function Greeting2(person) {
//   console.log(
//     `${person.greeting}, ${person.name} !!!, this is your 3rd Lesson`
//   );
// }

// let person1 = {
//   greeting: "Hey",
//   name: "Ram",
// };

// Greeting2(person1);
// Greeting2({
//   greeting: "Namaste",
//   name: "Krishna",
// });

// function Greeting3(person) {
//   console.log(`${person[0]}, ${person[1]} !!!, this is your 3rd Lesson`);
// }

// Greeting3(["Namaskaram", "Rama"]);

let greeting = "Hey";
let name = "Ram";

function Greeting4() {
  console.log(`${greeting}, ${name} !!!, this is your 3rd Lesson`);
} // impure

Greeting4();
Greeting4("Hello", "Krishna");
Greeting4("Hello", "Laxman");
