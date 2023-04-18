// symbol :-
// Symbol.  - to check the all methods of Symbol

//   it is a primitive data type added in ES6
// symbol always gives unique value

const prop1 = Symbol("id");
const prop2 = Symbol("id");
console.log(prop1 == prop2); //false

const obj = {
  [prop1]: 11,
  id: 12,
};

obj.id = 300;

console.log(obj);

// const prop3 = Symbol("id");
// const prop4 = Symbol("id");

// console.log(prop3 == prop4);  //false

// const obj = {
//     [prop3]: 11,
//     id: 12,
//     // [prop4]: 15,  // second check
//     // [prop3]: 21       // last input first output
// };

// obj.id = 300;

// console.log(obj);

// There are two ways to create the Symbol

// 1. Using Symbol() constructor
//   It always returns a unique symbol value

// 2. Using Symbol.for(key)
//   It returns a Symbol value maintained in the global symbol registry

const s1 = Symbol("id");
const s2 = Symbol("id");

console.log(s1 == s2); //false

// keys use karun

const s3 = Symbol.for("id"); //new
const s4 = Symbol.for("id"); //existing

console.log(s3 == s4); //true

console.log(Symbol.keyFor(s1)); // undefined
console.log(Symbol.keyFor(s2)); // undefined
console.log(Symbol.keyFor(s3)); // id
console.log(Symbol.keyFor(s4)); // id
