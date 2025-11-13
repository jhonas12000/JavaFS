console.log("Hello typescript");
var Person = /** @class */ (function () {
    function Person(name, age) {
        this._name = name;
        this._age = age;
    }
    Object.defineProperty(Person.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Age cannot be negative");
            }
            this._age = value;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.toString = function () {
        return "Person(name: ".concat(this._name, ", age: ").concat(this._age, ")");
    };
    return Person;
}());
//Usage 
var person = new Person("Alice", 30);
console.log(person.toString());
