#!/usr/bin/node
const firstArgument = process.argv[2];
const parsedNumber = parseInt(firstArgument);
const text = 'X';
if (isNaN(parsedNumber)) {
  console.log('Missing size');
} else {
  for (let i = 0; i < parsedNumber; i++) {
    console.log(text.repeat(parsedNumber));
  }
}
