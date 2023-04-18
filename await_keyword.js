// // await
// the await pauses the execution of asyc function until the promise is settle
// the async

// async function operations() {
//     console.log("starting...");
//     const p = await new Promise((res, rej) => {
//         setTimeout(() => {
//             res("server data");
//         }, 2000)
//     });
//     console.log("data received");

//     return p;
// } //opearations

// console.log("One");
// const p = operations();

// console.log("two");
// p.then((data) => {
//     console.log("Then: ", data);
// });
// p.catch((err) => {
//     console.log(err);
// });
// console.log("Three");

//********************************* Example2*****************************************/
async function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("some server data");
    }, 4000);
  });
}
function printData(data) {
  console.log("PrintData: ", data);
}

async function operations() {
  // getData().then((data) => {
  //     printData(data)
  // });

  const data = await getData();
  printData(data);
  console.log("Other Operations");
}
operations();
