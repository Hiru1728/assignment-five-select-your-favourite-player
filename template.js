const person = 'Adam Sand';
const person2 = "Ben White";
const person3 = `Donald Trump`;

// Multiline String
// new line createing uses \n
const multiline = 'First Line text \n' +
    'second line code \n' +
    'Third line of text \n' +
    'Fourth line of string';
// console.log(multiline);

// Multiline String easily handle by using Back tick ``;
const newMultiline = `First Line of text
Second Line of text
Third Line of String
Fourth Line of code`;
// console.log(newMultiline);

const a = 20;
const b = 30;
const num = [37, 83, 57, 93, 52];
const summary = 'sum of: ' + a + ' and ' + b + ' is: ' + (a + b);
// console.log(summary);

const newSummary = `sum of ${a} and ${num.length} is: ${a + b}`;
console.log(newSummary);