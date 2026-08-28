// const stu1 = {
//     name: "arjun",
//     age: 23,
//     marks: 81,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu2 = {
//     name: "akash",
//     age: 23,
//     marks: 91,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// const stu3 = {
//     name: "soni",
//     age: 21,
//     marks: 95,
//     getMarks: function () {
//         return this.marks;
//     },
// };

// Factory Function
// function personMakers (name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, My name is ${this.name}`);
//         },
//     };

//     return person;

// }

// New Operator - Constructors
// function person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// person.prototype.talk = function () {
//   console.log(`Hi, My name is ${this.name}`);
// };

// let p1 = new person("adam", 23);
// let p2 = new person("eve", 22);

// Classes
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi, My name is ${this.name}`);
  }
}

// let p1 = new person("adam", 23);
// let p2 = new person("eve", 22);


// Inheritance
class students extends person {
  constructor(name, age, marks) {
    super(name, age);   //Parent class constructor is being called 
    this.marks = marks;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let p1 = new person("adam", 23);
let p2 = new person("eve", 22);
