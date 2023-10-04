#!/usr/bin/node
const request = require('request');
const movieID = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    if (response.statusCode === 200) {
      const movie = JSON.parse(body);
      console.log(movie.title);
    } else {
      console.error(response.statusCode);
    }
  }
});
