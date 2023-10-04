#!/usr/bin/node
const fs = require('fs');
const filepath = process.argv[2];
const text = process.argv[3];

try {
  fs.writeFile(filepath, text);
} catch (error) {
  console.error(error);
}
