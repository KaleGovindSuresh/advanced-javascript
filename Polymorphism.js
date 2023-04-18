// Polymorphism - same name different forms 
// methods are polymorphic 

// 1. method overloading :- defining multiple methods having same name within a class then is called method overloading

// note :- method overloading is not supported in javascript 

// Example :- 

class Addition {
    add(a, b) {
        return a + b;
    }
    add(a, b, c) {
        return a + b + c; 
    }
}

const obj = new Addition();
console.log(obj.add(10, 20)); //NaN
console.log(obj.add(10, 20, 30)); //60


// method overriding:- 
        //   if the super class method is not fulfilling the requirement of sub class then sub class defined its owns having same name as  super class method this concept is called method overriding.


class Person {
    name;
    mobile;
    age;
    constructor(name, mobile, age) {
        this.name = name;
        this.mobile = mobile;
        this.age = age;
    }
    // overiden method
    profile() {
        console.log(`
        Name: ${this.name}
        Mobile: ${this.mobile}
        Age: ${this.age}
        `);
    }
}       

class Employee extends Person {
    empNo;
    salary;
    dept;
    constructor(no, sal, dep, name, mobile, age) {
        super(name, mobile, age);
        this.empNo = no;
        this.salary = sal;
        this.dept = dep;
    }    

// overriding methods
    profile() {
        console.log(`
        Emp No: ${this.empNo}
        Salary:${this.salary}
        Dept:${this.dept}
        Name: ${this.name}
        Mobile: ${this.mobile}
        Age: ${this.age}
        `);
    }
}

const obj1 = new Employee(11, 20200, "Web Developement", "Govind Kale", "9130814901", 22);

obj1.profile();