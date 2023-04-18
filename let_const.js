// Hoisting:-


// variable declaration :- 


// var 
//   - hoisted 
//   - Not block scoped 
//   - rewritable


// let 
//   - hoisted
//   -  block scoped 
//   - rewritable


// const 
//   - hoisted
//   - block scoped 
//   - read only 



// var name = "govind kale";
//   name = "kale";
// console.log(name);


// let name = "govind kale";

// console.log(name);

let name = "govind kale";
let mobile = "9130814901";
let mail = "govindkale111@gmail.com";

let all = (name) => {
    return "Hello '" + name + "',\n" + "Your salary amount " + salary + "\n" + 'for"' + month + '"mouth.';
}

console.log(mobile);

console.log(name);





// outer scope
var a = "aaa";
function f1() {
    // function scope
    var b = "bbb";
    console.log("in f1");

    if (true) {
        // block scope
        var c = "ccc";
        let d = "ddd";
        console.log("inside the if");
    }

    console.log(a); //aaa
    console.log(b); //bbb
    console.log(c); //ccc
    console.log(d); // ReferenceError
}
f1();
console.log(a); //aaa
// console.log(b); //RefernceError: b is not defined
// console.log(c); //RefernceError: c is not defined




// Hoisting
// Temporal Dead Zone

// country = "India";
// console.log(country);
// let country; //declaration

city = "Pune";
console.log(city);
var city; //declaration

function f1() {
    var x = 10;
    if (true) {
        let x = 20;
        console.log(x); //20
    }
    console.log(x); //10
}

f1();

// const 

const city1 = "Pune";
// city = "Mumbai";
console.log(city1);
