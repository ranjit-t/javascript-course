function Greeting(word, name = "Ram") {
  console.log(`${word}, ${name}!!!!`);
}

const name = "Ranjit";
const word = "Good Moring";

// Greeting(word);

// functions - order matters the most, not names of the parameters

// functions - if any default parameters are there, it is better to declare at the end

const shouldSayHello = (answer) => {
  console.log("answer from function is", answer);

  if (answer) {
    console.log("Hello");
  }
};

const myAnswer = true;
shouldSayHello(myAnswer);
shouldSayHello("");
shouldSayHello(0);
shouldSayHello(" ");
shouldSayHello("Bolo");
shouldSayHello([]);
shouldSayHello(Greeting);

//these three do the same thing but actions are different
shouldSayHello(Greeting("Hello"));
shouldSayHello();
shouldSayHello(undefined);

// truthy falsy

// O is falsy everything else is truthy including negative

// string, only empty string is falsy, and any string with length more than 0 is trut

//
let a = Greeting;
const b = a;

console.log(a === b);
