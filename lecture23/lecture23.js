// hoisting
console.log(hoistedVar); // undefined
var hoistedVar = 10;

//anonymous function
let sum = function(x, y) {
    return x + y;
};

console.log(sum(3, 5));
