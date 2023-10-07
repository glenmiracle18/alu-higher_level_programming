$(document).ready(() => {
  let currentClass = 'green';

  $('#toggle_header').click(() => {
    if (currentClass === 'green') {
      $('header').removeClass('green').addClass('red');
      currentClass = 'red';
    } else {
      $('header').removeClass('red').addClass('green');
      currentClass = 'green';
    }
  });
});
