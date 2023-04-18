// Callback ?
//   it is a function which is used to execute an opearation in the future callback is  passed
//   as an  arguments to another function (higher order function)

let data;
function fetchServerData(display) {
  setTimeout(() => {
    console.log("data received");
    data = "sample server data";
    display();
  }, 3000);
}

function displayData() {
  console.log("Display: ", data);
}

fetchServerData(displayData); //async

// callback hell
//   It is a problem when we create a code it occurs that time
// it is in a pyramid type
// The callback hell is a problematic situation in the programming occured due to using multiple
//  nested callbacks where it becomes difficult understanding the opening and closing
//  of the callbacks.
//  callback hell is a problem and not a feature
//  callback hell can be avoided by defining separate callbacks and by using promises.
