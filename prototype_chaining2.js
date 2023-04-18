// prototype-chaining.js

function Product(title, br, price) {
    this.title = title;
    this.brand = br;
    this.price = price;
}

Product.prototype.country = "India";
Object.prototype.country = "UK";

const prod1 = new Product("aaaa", "AAA", 1111);
const prod2 = new Product("bbbb", "BBB", 2222);

console.log(prod1);
console.log(prod2);

prod1.country = "Russia";
console.log(prod1.country); //Rusia


// Accessing prototype object
// There are two ways to access the prototype 
// 1. By using 'dunder proto' (__proto__);
// 2. By using Object.getPrototypeOf();

console.log(prod1.__proto__); //old use
console.log(Object.getPrototypeOf(prod1)); //new use
console.log(Object.getPrototypeOf(prod1).constructor); //new use

console.log(prod1.__proto__.__proto__);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(prod1)));

console.log(prod1.__proto__.__proto__.__proto__);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(prod1))));

