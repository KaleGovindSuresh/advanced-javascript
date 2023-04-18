// Map :-
//   The map stores the values associated with the keys
//   Each key value pair is called an entry
//   the keys must be unique and values can be duplicated

// [key,value] - entry
// create an empty map
// const m1 = new Map();

// create a map with existing entries
// const m2 = new Map([
//   [1, "aaaa"],
//   [2, "bbbb"],
//   [3, "cccc"],
//   ["aa", "dddd"],
//   [true, "eeeee"],
//   [{}, "ffff"],
//   [{}, "ppp"],
//   [{}, "ooo"],
//   [undefined, "gggg"],
//   [null, "hhh"],
//   [null, "iii"],
// ]);

const m1 = new Map();

console.log(m1);
// console.log(m2);

// add an entry to the map
// set(key,value )
m1.set(1, "aaaa");
m1.set(2, "bbbb");
m1.set(3, "cccc");
m1.set(4, "dddd");

console.log(m1);

// get a value associated with a key

console.log(m1.get(2)); //bbbb

// check availability of a key
console.log(m1.has(2)); //true
console.log(m1.has(3)); //false

// remove an entry
console.log(m1.delete(1)); //true
console.log(m1.delete(1)); //false
console.log(m1);

// remove all entries
// m1.clear();
// console.log(m1);

// check total entries
console.log("Size: ", m1.size);

// get all keys
const keys = m1.keys();
console.log(keys);
console.log("************* keys **************");
for (let k of keys) console.log(k);

// get all values
const values = m1.values();
console.log("************* values **************");
for (let v of values) console.log(v);

// get all entries
const entries = m1.entries();

for (const [key, val] of entries) {
  console.log(`${key} -> ${val}`);
}

// in details

// for (const entry of entries) {
//   // console.log(entry);
//   // console.log(`${entry[0]} -> ${entry[1]}`);
//   const [key, val] = entry;
//   console.log(`${key} -> ${val}`);
// }



// forEach method
m1.forEach(function (val, key, map) {
  console.log(`${key} -- ${val}`);
});
