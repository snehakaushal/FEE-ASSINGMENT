// map
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled);

// filter
let even = nums.filter(n => n % 2 === 0);
console.log(even);

// reduce
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(sum);

// spread
let arr1 = [5, 6];
let combined = [...nums, ...arr1];
console.log(combined);
