#!/usr/bin/node
const firstArgument = process.argv[2];
const parsedNumber = parseInt(firstArgument);
const text = 'C is fun';
if (isNaN(parsedNumber)) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < parsedNumber; i++) {
    console.log(text);
  }
}
