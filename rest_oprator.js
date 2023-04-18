// Rest operator :-
// It is used to store the extra(rest) values
// rest operator can be an array or an object

// 1. rest operator in array destructuring

const nums = [10, 20, 30, 40, 50, 60, 70];
const [a, b, c, ...items] = nums;
console.log(items);

// 2. rest operator in object destructuring

const person = {
  name: "Topper Skills",
  age: 5,
  email: "mailto:topperskills@gmail.com",
};

// const { name, ...props } = person;
const { name, ...props } = person;
console.log(props);

// 3. rest operator in function

function f1 (a, b, ...c) {
    console.log(a,b);
    console.log(c);
}
f1(10, 20, 30, 40, 50, 60, 70, 80,90)