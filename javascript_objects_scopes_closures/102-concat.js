#!/usr/bin/node
const args = process.argv;
const pathA = args[2];
const pathB = args[3];
const pathC = args[4];

const fs = require('fs');

const dataA = fs.readFileSync(pathA, 'utf8');
const dataB = fs.readFileSync(pathB, 'utf8');
fs.writeFileSync(pathC, dataA + dataB);
