#!/usr/bin/node
const movieID = process.argv[2];
const request = require('request');
const requestURL = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

request(requestURL, function (error, response, body) {
  if (error) {
    console.error(error);
  } else if (response.statusCode === 200) {
    const movieIData = JSON.parse(body);

    // console.log(movieIData.title);
    movieIData.characters.forEach((characterURL1) => {
      request(characterURL1, (charError, charaterResponse, charBody) => {
        if (charError) {
          console.error(error);
        } else if (charaterResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        }
      });
    });
  } else {
    console.log(response.statusCode);
  }
});
