// remove duplicates elements from an array  using set

const arr = [10, 20, 30, 40, 50, 60, 10, 20, 30, 40, 70, 80];
const arr4 = [...new Set(arr)];
console.log(arr4);

// console.log(arr);

// create a set using the array
const s1 = new Set(arr);

// convert the set into an array
const arr2 = Array.from(s1);

// in one line we remove duplicates

const arr3 = Array.from(new Set(arr));

console.log(arr);
console.log(arr2);
console.log(arr3); //[10, 20, 30, 40, 50, 60, 70, 80]
