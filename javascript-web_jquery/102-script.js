$(document).ready(() => {
  const endpoint = 'https://www.fourtonfish.com/hellosalut/hello/';
  $('INPUT#btn_translate').click(() => {
    const lang = $('INPUT#language_code').val();
    $.get(endpoint + lang.toString(), function (data, textStatus) {
      $('DIV#hello').text(data.hello);
    });
  });
});
