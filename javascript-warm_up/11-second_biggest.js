#!/usr/bin/node
const args = process.argv;
const scriptArgs = [];
for (let i = 2; i < args.length; i++) {
  scriptArgs.push(args[i]);
}
const intArgs = scriptArgs.map(item => parseInt(item, 10));
// console.log(intArgs);
const sortedArgs = intArgs.sort((a, b) => b - a);
const secondLargest = sortedArgs[1];
if (args.length <= 2 && args.length[3] === 1) {
  console.log(0);
} else {
  console.log(secondLargest);
}
