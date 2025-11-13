"use strict";
console.log("Hello typescript");
class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        if (value < 0) {
            throw new Error("Age cannot be negative");
        }
        this._age = value;
    }
    toString() {
        return `Person(name: ${this._name}, age: ${this._age})`;
    }
}
//Usage 
const person1 = new Person("Alice", 30);
console.log(person1.toString());
person1.name = "Will";
person1.age = 31;
console.log(person1.toString());
