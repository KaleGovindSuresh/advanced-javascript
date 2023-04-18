// spead operator
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log("min: ", Math.min(...arr));

console.log(arr);
console.log(...arr);

// variables (rest) = values (spread)

const name = "Topper Skills";
console.log(name);
console.log(...name);

const user = {
  name: "Govind Kale",
  age: 22,
};

console.log(user);
// console.log(...user);

// Example of spread operator
const arr1 = [1, 2, 3, 4];
const arr2 = [10, 20, 30, 40];
const arr3 = [100, 200, 300, 400];
console.log([...arr1, ...arr2, ...arr3]);

// example

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
//output: 6

console.log(sum.apply(null, numbers));
//output: 6
