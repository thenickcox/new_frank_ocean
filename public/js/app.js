var check = function() {
  $.ajax({
    url: '/check',
    beforeSend: function() {
      $('h1')
        .css('background-image', '')
        .addClass('loading');
    },
    success: function(data) {
      $('h1')
        .css('background-image', 'url(images/' + data.backgroundImage + ')')
        .removeClass('loading');
      var imageNum = Math.floor(Math.random() * 5) + 1;
      $('img.frank').attr('src', 'images/frank/frank-' + imageNum + '.png');
    }
  });
}

$(document).ready(function() {
  setTimeout(function() {
    $('div.loader').fadeOut('slow');
    check();
  }, 2000);

  $('button').click(function(){
    $(this).text('How about now?');
    check();
  });

  $('.flint-modal-toggle').click(function(){
    $('.love-flint-modal').toggleClass('active');
  });
});
