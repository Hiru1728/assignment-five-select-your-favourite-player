const max = Math.max(12, 64, 83, 32);
// console.log(max);
const numbers = [12, 64, 83, 32];
const largest = Math.max(...numbers);

// console.log(numbers);
// console.log(...numbers);
// console.log(largest);

const numbers2 = numbers;
numbers.push(55);
console.log(numbers);
console.log(numbers2);

const cars = ['toyota', 'honda', 'mercedes'];
const newCars = [...cars, 'ferrari'];
console.log(newCars);