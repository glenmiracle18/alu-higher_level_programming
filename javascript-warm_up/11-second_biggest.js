#!/usr/bin/node
const arguments = process.argv;
const scriptArgs = [];
for (let i = 2; i < arguments.length; i++) {
   scriptArgs.push(arguments[i]); 
}
const intArgs = scriptArgs.map(item => parseInt(item, 10));
// console.log(intArgs);
const sortedArgs = intArgs.sort();
// console.log(sortedArgs)
intArgs.pop();
const secondHighest = intArgs[intArgs.length - 1];
console.log(secondHighest)

// if (arguments.length === 2) {
//   console.log(0);
// } else if (arguments[2] = 1) {
//     console.log(0);
// } else {
//     console.log(secondHighest)
// }
