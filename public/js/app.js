var check = function() {
  $.ajax({
    url: '/check',
    beforeSend: function() {
      $('.main-headline')
        .css('background-image', '')
        .addClass('loading');
    },
    success: function(data) {
      setTimeout(function() {
        $('.main-headline')
          .css('background-image', 'url(images/' + data.backgroundImage + ')')
          .removeClass('loading');
        var imageNum = Math.floor(Math.random() * 5) + 1;
        $('img.frank').attr('src', 'images/frank/frank-' + imageNum + '.png');
      }, 1500);
    }
  });
}

$(document).ready(function() {
  for (var i = 0; i < 5; i++) {
    var img = new Image();
    img.src = 'images/frank/frank-' + i + '.png';
  }
  setTimeout(function() {
    $('div.loader').fadeOut('slow');
    setTimeout(function() {
      check();
    }, 1500);
  }, 1500);

  $('button').click(function(){
    $(this).text('How about now?');
    check();
  });

  $('.main-headline').click(function(){
    check();
  });

  $('.flint-modal-toggle').click(function(){
    $('.love-flint-modal').toggleClass('active');
    $('.flint-modal-toggle').toggleClass('active');
  });
});
