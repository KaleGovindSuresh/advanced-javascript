// Arrow function 
//   An arrow function is a new function type added in es-6 to define a function in shorter way 

//   The arrow function is different from named function in below cases 
//   1. arrow function is not hoisted
//   2.arrow function does not have its own arguments object 
//   3. the 'this' keyword in arrow function always refer to the parent context 
//   (the context under which the arrow function is defined)

//   syntax:- 

// (parameters) => {body}

// example:- 

//named function 
// function sq(n) {
//     return n * n;
// }
// console.log(sq(10));

// arrow function
// const sq2 = (n) => {
//     return n * n;
// };
// console.log(sq2(10));


// Rules of Arrow Function :- 
// 1) 
// const sq2 = n => {
//         return n * n;
//     };
//     console.log(sq2(10));

// // 2)
// const sq3 = (num) => num * num;

// console.log(sq3(10));



// arguments

function f1() {
    console.log("nameD: ", arguments);
}

const f2 = function () {
    console.log("anonymous: ", arguments);
};

const f3 = () => {
    console.log("arrow: ", arguments);
}


f1(10);
f2(20);
f3(30);



// this keyword
