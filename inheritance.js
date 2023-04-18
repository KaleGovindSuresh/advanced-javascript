// inheritance :- 
//   Acquiring the peoperties of super class into sub class is called inheeritance 
// The main purpose of inheritance is code reusability 

// syntax 

class Person {
    name;
    mobile;
    constructor(name, mobile) {
        this.name = name;
        this.mobile = mobile;
    }
}

class Student extends Person {
    rollNo;
    constructor(roll, name, mobile,id) {
        super(name, mobile);
        this.rollNo = roll;
        this.id = id;
    }
}

const stud = new Student(22, "Govind Kale", "9130814901",1);
const person = new Person("Govind Kale", "9130814901");
console.log(stud);
console.log(person);



// Type of Inheritance 
//  1.single 
            //  single super class single sub class
//  2.multilevel
    //  a sub class can have sub class and so on in level 
//  3.heirarchical
   // one class can have multiple sub classes
//  4.multiple(not suppprted)
   // multiple super class for single sub class
//  5.hybrid(not suppprted)
   // it is a combination of hierarchical and multiple inheritance  

   
 
// class A {
//     name = "Govind Kale";
//     print() {
//         console.log(`name is ${this.name}`);
//     }
// }
// class B {
//     name = "Govind Suresh Kale";
//     print() {
//         console.log(`name is ${this.name}`);
//     }
// }

// // class C extends A, B{
// // }
//     class C extends A {}

//     const c = new C();
//     c.print();
//     console.log(c.name);