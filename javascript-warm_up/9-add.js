#!/usr/bin/node
const firstArgument = process.argv[2];
const secondArgument = process.argv[3];
const firstInt = parseInt(firstArgument);
const secondInt = parseInt(secondArgument);
function add (a, b) {
  return a + b;
}
console.log(add(firstInt, secondInt));
