#!/usr/bin/node
const request = require('request');
const requestURL = process.argv[2];

request.get(requestURL, (error, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log(response.statusCode);
  }
});
