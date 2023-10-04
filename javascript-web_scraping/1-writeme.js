#!/usr/bin/node
const { error } = require('console');
const fs = require('fs');
const filepath = process.argv[2];
const text = process.argv[3];

fs.writeFile(filepath, text, (error) => {
  if(error) {
    console.error(error);
  } 
})
