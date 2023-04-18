// iterable
//   an object is said to be iterable if it follows iterable protocol. 


// Iterable protocal 


// there are some existing iterables 

// Example 
// const iterator = {
//     next(){
//         return {value:"Some value", done: false}
//     }
// }

const arr = [10, 20, 30, 40, 50];

const itr = arr[Symbol.iterator]();
console.log(itr.next()); // {value:10, done:false}
console.log(itr.next()); // {value:20, done:false}
console.log(itr.next()); // {value:30, done:false}
console.log(itr.next()); // {value:40, done:false}
console.log(itr.next()); // {value:50, done:false}
console.log(itr.next()); // {value:undefined, done:true}

// for(const ele of arr) {

// }