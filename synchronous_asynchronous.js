// // synchronous vs asynchronous
// // note :- javascript is a single threaded synchronous langauge 

// // syncronous 

// function f1(){
//     console.log("f1");
// }
// function f2(){
//     console.log("f2");
// }
// function f3(){
//     console.log("f3");
// }

// console.log("one");
// f1();
// console.log("two");
// f2();
// console.log("three");
// f3();
// console.log("four");



// Asynchronous execution

console.log("one");

setTimeout(() => {
    console.log("100");
}, 100);

console.log("two");

setTimeout(() => {
    console.log("0");
}, 0);

console.log("three");

setTimeout(() => {
    console.log("50");
}, 50);