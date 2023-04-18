// Array Destructuring

const nums = [10, 20, 30, 40, 50, 60, 70];

// let x = nums[0];
// let y = nums[1];
// let z = nums[3];

let [x, y, , z, w] = nums;

console.log(x, y, z, w);

const names = ["govind", "arjun", "atul", "ravi", "shekar", "mahesh", "vinod"];

let [a, b, c, , e] = names;
console.log(a, b, c, e);
