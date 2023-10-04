#!/usr/bin/node
const request = require('request');
const apiUrl = process.argv[2];
// const characterID =  'https://swapi-api.alx-tools.com/api/people/18/';
let movieCount = 0;

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    if (response.statusCode === 200) {
      const movie = JSON.parse(body);
      for (const film of movie.results) {
        if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
          movieCount++;
        }
      }
      console.log(movieCount);
    } else {
      console.error(response.statusCode);
    }
  }
});
