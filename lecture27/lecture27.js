// this keyword
const obj = {
    value: 10,
    getValue: function() {
        return this.value;
    }
};
console.log(obj.getValue());

// prototype
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    return "Hello, " + this.name;
};

const person1 = new Person("kanav");
console.log(person1.greet());

// arrow function
const add = (a, b) => a + b;
console.log(add(5, 3));
