// static-modifier 

// staic members
//  - static members are class level members
//  -static members are not part of object created using the class
//  -

class Employee {
    name;
    mobile;
    salary;
    static company = "TCS";

    constructor(name, mob, comp, salary) {
        this.name = name;
        this.mobile =mob;
        this.salary =salary;
        // this.company = comp; 
    }
}

const e3 = new Employee("aaa", "913081", "TCS", 1111);
// e1.company = "topper skills";
const e4 = new Employee("bbb", "987878", "TCS", 2222);


console.log(e3);
console.log(e4);
// console.log(e1.company);
console.log(Employee.company);



// Instance members :- 

// class Employee {
//     name;
//     mobile;
//     salary;

//     constructor(name, mob, comp, salary) {
//         this.name = name;
//         this.mobile =mob;
//         this.salary =salary;
//         this.company = comp; 
//     }
// }

// const e1 = new Employee("aaa", "913081", "TCS", 1111);
// // e1.company = "topper skills";
// const e2 = new Employee("bbb", "987878", "TCS", 2222);


// console.log(e1);
// console.log(e2);




