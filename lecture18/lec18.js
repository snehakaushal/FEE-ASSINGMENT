let fruits = ["Sneha", "Lovisha", "Maya"];

fruits.push("Anna");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Zara");
console.log(fruits);

let sliced = fruits.slice(0, 2);
console.log(sliced);

let index = fruits.indexOf("Lovisha");
console.log(index);

fruits.forEach((fruit) => {
    console.log(fruit);
});
