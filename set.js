// set :-
// set stores unique elements only 
// set is an iterable object 



// create an empty  set

const s1 = new Set();

// create a set with existing Elements

const s2 = new Set([10, 20, 30, 40, 50, 60, 30, 40, 60, 20, 40, 30]);
// const s3 = new Set("Topper skills");
// console.log(s1);
// console.log(s2);
// console.log(s3);

// add an item to the set 
s2.add(70);
s2.add(80);
s2.add(10);
console.log(s2);

// to check whether an item exists or not 
console.log(s2.has(10)); // true
console.log(s2.has(100)); //false


// to remove an item 
console.log(s2.delete(50)); //true
console.log(s2);

// remove all items 
// s2.clear();
// console.log(s2); //{}


// for 

// for (const ele of s2) console.log(ele);


// for each 

// Set.add()
// Set.delete()
// Set.has()
// Set.remove() 
// Set.clear()
