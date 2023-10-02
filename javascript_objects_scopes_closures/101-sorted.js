#!/usr/bin/node
const dict = require('./101-data').dict;
const newDict = {};
for (const [key, value] of Object.entries(dict)) {
  if (value in newDict) {
    const l2 = newDict[value];
    l2.push(key);
    newDict[value] = l2;
  } else {
    const l1 = [];
    l1[0] = key;
    newDict[value] = l1;
  }
}

console.log(newDict);
