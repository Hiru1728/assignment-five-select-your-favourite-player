// function add(first, second) {
//     console.log(first, second);
// Two parts Are Same
//     1// second = second || 0;
//     2// if (second === undefined) {
//     //     second = 0;
//     // }
//     const total = first + second;
//     return total;
// }

// default paramiter
function add(first = 0, second = 0) {
    const total = first + second;
    return total;
}

const result = add();
console.log(result);

function fullName(first, last = 'chowdhury') {
    const name = first + ' ' + last;
    return name;
}
const name = fullName('aslam');
console.log(name);