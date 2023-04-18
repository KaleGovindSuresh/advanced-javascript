// Generator Function 
//    If a function defined with '*' then it is called generator function 
// function* functionName() {}

// The execution of generator function exited and resumed in middle 

// The generator function returns generator objects 

// function* fun(){

// }


// // normal named function 
// function normal() {
//     console.log("start");
//     const sum = 10 + 30;
//     console.log("end");
// }

// // generator function
// function* fun() {
//     console.log("start");
//     const sum = 10 + 40;
//     yield sum;
//     console.log("end");
// }

// normal();

// console.log("*".repeat(20));
// const gen = fun();

// console.log(gen.next());
// console.log("paused...");
// console.log(gen.next());



// example 

function* add() {
    yield 10;
    console.log("one");
    yield 20;
    console.log("two");
    yield 30;
    console.log("three");
    yield 40;
    console.log("four");
    yield 50;
  }
  const itr = add();
  console.log("aaaa");
  console.log(itr.next().value);
  console.log("bbb");
  console.log(itr.next().value);
  console.log("ccc");
  console.log(itr.next().value);
  console.log("ddd");
  console.log(itr.next().value);
  console.log("eee");
  