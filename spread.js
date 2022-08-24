const max = Math.max(12, 64, 83, 32);
// console.log(max);
const numbers = [12, 64, 83, 32];
const largest = Math.max(...numbers);

// console.log(numbers);
// console.log(...numbers);
// console.log(largest);

// const numbers2 = numbers;
// numbers.push(55);
// numbers2.push(777);

// only one value add different different array
const numbers2 = [...numbers];
numbers.push(55);
numbers2.push(777);
console.log(numbers);
console.log(numbers2);

const numbers3 = [...numbers];
const numbers4 = [333, 23, ...numbers, 93];

console.log(numbers3);
console.log(numbers4);

// const cars = ['toyota', 'honda', 'mercedes'];
// const newCars = [...cars, 'ferrari'];
// console.log(newCars);