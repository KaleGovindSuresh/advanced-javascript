// example  1
// this.name = "abcde";
// this.city = "mumbai";

// const user = {
//     name: "Topper Skills",a
//     city: "pune",
//     profile: function () {
//         console.log(
//             `Name: ${this.name},
//             City: ${this.city}`
//             );
//         },
        
//         profile2: () => {
//             console.log(
//                 `Name: ${this.name},
//         City: ${this.city}`
//         );
//     },
// };

// user.profile();
// user.profile2();

// example  2

this.name = "outer object";
class Test {
  name = "Topper Skills";

  m1() {
    console.log("m1: ", this?.name);
  }

  m2 = () => {
    console.log("m2: ", this?.name);
  };
}

const obj = new Test();

// obj.m1(); //m1 Topper Skills
// obj.m2(); //m2 Topper Skills

const a = obj.m1;
const b = obj.m2;

a(); //m1 undefined
b(); //m2 Topper skills
