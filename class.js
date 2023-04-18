class Person {
    //state
    //property = value;
    name= "Topper Skills";
    city = "Pune";
    age = 10;
    
    // behaviour
    reading() {
        console.log(this.name + "is reading...");
    }
}

console.log(typeof Person); //function

// ************************************************************************************ //


// constructor function 

// const Dog = (() => {
// function Dog(color, age, weight) {
//     this.age = age;
//     this.color = color;
//     this.weight = weight;
// }
// Dog.prototype.running = function () {
//     console.log("the dog is running...");
// };
// return Dog;
// })();

// const d1 = new Dog("black", 2, 10);

// console.log(d1);
// d1.running();


// class 

class Dog {
    age;
    color;
    weight;
    
    // the constructor () method is used to initiaze the object properties
//  it will get executed at the time of object creation

constructor(color, age, weight) {
    this.age = age;
    this.color = color;
    this.weight = weight;
}

running() {
    console.log("the dog is running...");
}
}

const d1 = new Dog ("black", 2, 10);
console.log(d1);
d1.running();