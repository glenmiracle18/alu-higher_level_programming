// $(document).ready(function() {
//     // Perform the API request using jQuery's $.get() method
//     $.get("https://fourtonfish.com/hellosalut/?lang=fr", function(data) {
//         // Extract the translation of "hello" from the API response
//         const translation = data.hello;

//         // Display the translation in the DIV#hello element
//         $("#hello").text(translation);
//     });
// });

$.get('https://fourtonfish.com/hellosalut/?lang=fr',
  function (data, textStatus) {
    $('#hello').text(data.hello);
  });
