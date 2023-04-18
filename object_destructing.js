// Object destructuring

const person = {
  name: "Topper Skills",
  mobile: "7875580668",
  city: "Pune",
  email: "mailto:topperskills@gmail.com",
};

// const name = person.name;
// const phone = person.mobile;
// const email = person.email;
// const city = person.city;

const { email, name, mobile: phone } = person;

console.log(name, phone, email);



// rest operator with object destructuring


let customers = {
  c1: 101,
  c2: 102,
  c3: 103
}
let { c1, ...others } = customers
console.log(c1)
console.log(others)
//nested objects
let emp = {
  id: 101,
  address: {
    city: 'Mumbai',
    pin: 1234
  }
}
let { address } = emp;
console.log(address)