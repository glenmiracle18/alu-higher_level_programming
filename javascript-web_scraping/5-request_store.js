#!/usr/bin/node
const fs = require('fs');
const request = require('request');
const requestURL = process.argv[2];
const filePath = process.argv[3];

request(requestURL, function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const data = body;
    fs.writeFileSync(filePath, data, (error) => {
      if (error) {
        console.error(error);
      }
    });
  }
});
