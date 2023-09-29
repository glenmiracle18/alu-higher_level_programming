#!/usr/bin/node
const firstArgument = process.argv[2];
const parsedNumber = parseInt(firstArgument);

function factorial (a) {
  if (isNaN(parsedNumber)) {
    console.log(1);
  } else {
    let res = 1;
    for (let i = 1; i <= a; i++) {
      res *= i;
    }
    return res;
  }
}
console.log(factorial(parsedNumber));
