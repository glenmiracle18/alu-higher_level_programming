#!/usr/bin/node
// const request = require('request');
// const apiUrl = process.argv[2];
// // const characterID =  'https://swapi-api.alx-tools.com/api/people/18/';
// let movieCount = 0;

// request.get(apiUrl, (error, response, body) => {
//   if (error) {
//     console.error(error);
//   } else {
//     if (response.statusCode === 200) {
//       const movie = JSON.parse(body);
//       for (const film of movie.results) {
//         if (film.characters.includes('https://swapi-api.alx-tools.com/api/people/18/')) {
//           movieCount++;
//         }
//       }
//       console.log(movieCount);
//     } else {
//       console.error(response.statusCode);
//     }
//   }
// });

const request = require('request');

request(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    const data = JSON.parse(body);
    const movieCount = data.results.length;
    let finalResult = 0;
    // const comString = 'https://swapi-api.hbtn.io/api/people/18/';
    for (let i = 0; i < movieCount; i++) {
      const numChars = data.results[i].characters.length;
      for (let j = 0; j < numChars; j++) {
        const comString0 = data.results[i].characters[j];
        if (comString0.slice(-4, -1) === '/18') {
          finalResult += 1;
        }
      }
    }
    console.log(finalResult);
  }
});
