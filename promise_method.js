//**************************/ method of Promise *****************************************/
// Promise.all() :-

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1");
//     }, 2000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p2");
//         reject("p2 reject");
//     }, 500);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p3");
//     }, 1000);
// });

// Promise.all([p1, p2, p3])
//  .then((data) => {
//     console.log("sucess: ", data);
//  })
//  .catch((err) =>{
//     console.log("failed: ",err);
//  });

// -------------------------------------------------------------
// Promise.race() :-

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1");
//     }, 2000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2");
//         // reject("p2 reject");
//     }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p3");
//         reject("p3 reject");
//     }, 3000);
// });
// Promise.race([p1, p2, p3])
// .then((data) => {
//     console.log("sucess: ", data);
// })
// .catch((err) =>{
//     console.log("failed: ",err);
// });
// -------------------------------------------------------------

// Promise.allSettled():- 

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p1");
//     }, 2000);
// });
// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("p2");
//         // reject("p2 reject");
//     }, 1000);
// });
// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("p3");
//         reject("p3 reject");
//     }, 3000);
// });
// Promise.allSettled([p1, p2, p3])
// .then((data) => {
//     console.log("sucess: ", data);
// })
// .catch((err) =>{
//     console.log("failed: ",err);
// });


// Promise.resolve:-
// Promise.reject:-

Promise.resolve().then(() => {
    console.log("Execute something asynchronously");
});

Promise.reject("rejected....")
.then(() => {
    console.log("then rejected...");
})
.catch((err) => {
    console.log("err catch");
})
