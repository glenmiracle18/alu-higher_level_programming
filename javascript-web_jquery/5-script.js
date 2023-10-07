$(document).ready(() => {
  $('DIV#add_item').click(() => {
    const item = '<li>Item</li>';
    $('UL.my_list').append(item);
  });
});
