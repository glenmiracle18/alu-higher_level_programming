#!/usr/bin/node
let firstArgument = process.argv[2];
let secondArgument = process.argv[3];
if (typeof firstArgument === 'undefined') {
  firstArgument = 'undefined';
}
if (typeof secondArgument === 'undefined') {
  secondArgument = 'undefined';
}
console.log(firstArgument + ' is ' + secondArgument); // prints out the two arguments passed in
