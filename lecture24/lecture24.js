// higher-order function (HOF)
function hof(fn, value) {
    return fn(value);
}

let double = function(n) {
    return n * 2;
};

console.log(hof(double, 5));

// methods
let person = {
    name: "alex",
    greet() {
        return "hello " + this.name;
    }
};

console.log(person.greet());

// iterators
let arr = [1, 2, 3, 4];
arr.forEach(function(element) {
    console.log(element);
});
