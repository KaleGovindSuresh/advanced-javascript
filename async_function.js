// async_function 
// a function defined with async keyword is called async function
// the async function returns a promise

async function f1() {
    console.log("synchronous code run here");
    return 10;
}

// console.log(f1()); //undefined

console.log("start");
f1()
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});
console.log("end");