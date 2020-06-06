
// module wrapper function
// (function (exports, require, module, __filename, __dirname) {
//   // Module code actually lives in here
// });
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  greeting () {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

module.exports = Person;
