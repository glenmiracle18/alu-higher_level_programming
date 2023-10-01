#!/usr/bin/node
const dict = require('./101-data').dict;
const d1 = {};
for (const [key, value] of Object.entries(dict)) {
  if (value in d1) {
    const l2 = d1[value];
    l2.push(key);
    d1[value] = l2;
  } else {
    const l1 = [];
    l1[0] = key;
    d1[value] = l1;
  }
}

console.log(d1);
