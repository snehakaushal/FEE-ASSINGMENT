function add(x = 1, y = 2) {
    let result = x + y;
    return result;
}

let total = add(3, 4);
console.log(total);

let defaultTotal = add();
console.log(defaultTotal);

function scopeTest() {
    let localVar = "inside";
    console.log(localVar);
}

scopeTest();
