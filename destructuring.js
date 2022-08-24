const fish = {
    name: 'King Hilsa',
    address: 'Chandpur',
    color: 'silver',
    phone: '0171765888899',
    price: 4000
}

// const phone = fish.phone;
// const color = fish.color;
// const price = fish.name;
const { phone } = fish;
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);

const { age, name } = { name: 'Almas', age: 56, profession: 'makeup artist' };
console.log(age);

const { address } = fish;
console.log(address);

// array destructuring
const [first, another] = [44, 66, 76, 98];
console.log(first, another);

const nayoks = ['shakib', 'bappi', 'raj'];
const [king, lost, notun] = nayoks;
console.log(notun);

function getNames() {
    return ['hiru', 'fahad'];
}

const [friend1, friend2] = getNames();
console.log(friend2, friend1);