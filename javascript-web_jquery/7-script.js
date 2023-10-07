let charName;
$.get('https://swapi-api.alx-tools.com/api/people/5/?format=json', function (data) {
  charName = data.name;
  $('DIV#character').text(charName);
});
