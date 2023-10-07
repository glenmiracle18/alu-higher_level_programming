$(document).ready(() => {
  const item = '<li>Item</li>';
  $('DIV#add_item').click(() => {
    $('UL.my_list').append(item);
  });
  $('DIV#remove_item').click(() => {
    $('UL.my_list li:last').remove();
  });
  $('DIV#clear_list').click(() => {
    $('UL.my_list').remove();
  });
});
