// promise?
// promise is an object which provides a facility to execute asynchronous operation more conveientlty than just using callback.

// A JavaScript Promise object contains both the producing code and calls to the consuming code:

// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

const p = new Promise((resolve, reject) => {
  //perform async operation
  setTimeout(() => {
    // if operation is sucess
    resolve("server data");
    // if operation is not sucess, rejected
    reject("could not load the data");
  }, 3000);
});

// if the promise resolves then the callback passed to the .then() will get execute
p.then((data) => {
  console.log(data);
});

//if the promise rejected then the callback passed to the .catch()
// will get executed

p.catch((err) => {
  console.log(err);
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("done");
    reject("failed...");
  }, 3000);
})
  .then(
    (data) => {
      console.log(data);
    },
    (err) => {
      console.log("Then error: ", err);
      console.log(abcd);
    }
  )
  .catch((err) => {
    console.log("catch: ", err);
  })
  .finally(() => {
    console.log("always executed.....");
  });
