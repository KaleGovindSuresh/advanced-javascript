// static-instance-method
// static methods -
// - the static methods are used to perform  to object independent operations
// - the static methods can be executed without creating an object of the

class Employee {
  name;
  mobile;
  salary;

  constructor(name, mob, comp, salary) {
    this.name = name;
    this.mobile = mob;
    this.salary = salary;
    // this.company = comp;
  }
  // instance methods
  profile() {
    console.log(`Name: ${this.name}
    Mobile: ${this.mobile}
    Salary: ${this.salary} 
    Company: ${Employee.company}
    `);
  }

  //static methods

  static encrypt(text) {
    console.log(this.company);
    console.log(Employee.company);
    return "asdfgh" + text;
  }
}

console.log(Employee.encrypt("abcdef"));
// console.log(Employee.profile());

const e1 = new Employee("aaa", "1111", "TCS", 1111);
const e2 = new Employee("bbb", "2222", "TCS", 2222);

console.log(e1);
console.log(e2);
// console.log(e1.company);
console.log(Employee.company);
// console.log(e1.encrypt("xyz"));

e1.profile();
e2.profile();
