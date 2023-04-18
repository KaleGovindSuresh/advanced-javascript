// Example 1 
const person = {
    name: "Govind Kale",
    age: 22,
    mobile:"9130814901",
    city: "pune",
    email: "govindskale111@gamil.com",
};

//make the person object as iterable 
person[Symbol.iterator] = function* () {
    yield this.name;
    yield this.mobile;
    yield this.email
    yield this.city;
    yield this.age;
}

for (const p of person) console.log(p);


// Example 2 
// array 

const arr = [10, 20, 30, 40, 50, 60, 70, 80];
arr[Symbol.iterator] = function* () {
    for (let i = this.length - 1; i >= 0; i--) yield this[i];
};

for (const ele of arr) console.log(ele);


// string 

const str = "Topper Skills";
for (const ch of str) console.log(ch);


