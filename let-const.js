// breakup with var
// no more use of var
// let: let it to reassign
// const: do not allow it to reassign

let money = 25;
money = 35;

console.log(money);

const bird = 'Programming Hero 6';
//bird = 'Programming Hero';
const message = bird + 'batch';
console.log(message);

const numbers = [12, 46, 74, 45];
// resign not allow
number = [73, 49, 06, 65];
numbers.push(123);
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'Rongpur'
}
// student ={name: 'mofazzol'}
student.name = 'mofazzol';

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    // var number = numbers[i];
    sum = sum + number;

}
console.log(number);