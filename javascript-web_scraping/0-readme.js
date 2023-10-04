#!/usr/bin/node
const { error } = require('console');
const fs = require('fs');
const filepath = process.argv[2];

try {
  const data = fs.readFileSync(filepath, 'utf-8');
  console.log(data);
} catch {
  console.error(error);
}
