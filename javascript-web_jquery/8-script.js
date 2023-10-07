let title;
$.get('https://swapi-api.alx-tools.com/api/films/?format=json', function (data) {
  for (let i = 0, len = data.results.length; i < len; ++i) {
    title = data.results[i].title;
    $('UL#list_movies').append(`<li>${title}</li>`);
  }
});
