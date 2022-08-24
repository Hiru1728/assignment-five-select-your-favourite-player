// function add(first, second) {
//     const total = first + second;
//     return total;
// }

// function expression
const add1 = function add1(first, second) {
    const total = first + second;
    return total;
}

// Function expression with anonymous function(without function name)
const add2 = function (first, second) {
    const total = first + second;
    return total;
}

function add(first, second) {
    const total = first + second;
    return total;
}

function add4(first, second) {
    return first + second;
}

// arrow Function
const add5 = function (first, second) {
    return first + second;
}

const add6 = (first, second) => first + second;
const result = add6(20, 10);
console.log(result);

// Interview Question: Differences between function declartion, function expression and arrow function;