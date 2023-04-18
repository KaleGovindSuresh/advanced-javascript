// Timer API 
//   Timer API is not the part of javascript 



// In the Timer API there are four standard methods

// Standard:-

// setTimeout(callback, delay, arguments):-

function greet(name, city) {
    console.log("Hello "+ name, city);
}

// greet();
// setTimeout(greet, 3000);
// setTimeout(greet, 3000, "Govind Kale", "Pune");


// setInterval(callback, delay, arguments):-
setInterval(() => {
    console.log("hi");
}, 2000);

// clearTimeout
// let count = 0;

// function inc() {
//     console.log(++count);
// }

// const timer = setInterval(inc, 500);

// setTimeout(() => {
//     clearInterval(timer);
// }, 5090);
// clearInterval


// Non-Standard:-
// setimmediate()


// cleaimmediate()


// SetImmediate(() =>{})

// const sayHi = () => {
//     console.log("Hi");
// };

// console.log("starting");
// //sayHi
// const timer = setImmediate(sayHi);
// // clearImmediate(timer);
// console.log("ending");