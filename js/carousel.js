$(document).on('click', '.left', moveRight);
$(document).on('click', '.right', moveLeft);
$(document).on('swipeleft', '.md-carousel', moveRight);
$(document).on('swiperight', '.md-carousel', moveLeft);
let animating = false;
function moveRight() {
  console.log('move right');
  if (animating) {
    return;
  }
  animating = true;
  const left = $('.left').addClass('moveRight');
  const active = $('.active').addClass('moveRight');
  const right = $('.right').addClass('moveRight');
  const previous = left.prev().length > 0 ? left.prev() : $('.md-carousel-item').last();
  previous.addClass('moveRight');

  const index = left.index();
  $('.md-indicator.md-indicator-active').removeClass('md-indicator-active');
  $('.md-indicator').eq(index).addClass('md-indicator-active');

  setTimeout(function() {
    left.removeClass('left').addClass('active').removeClass('moveRight');
    active.removeClass('active').addClass('right').removeClass('moveRight');
    right.removeClass('right').addClass('hidden').removeClass('moveRight');
    previous.removeClass('hidden').addClass('left').removeClass('moveRight');
    animating = false;
  }, 1000);
}

function moveLeft() {
  console.log('move left');
  if (animating) {
    return;
  }
  animating = true;
  const left = $('.left').addClass('moveLeft');
  const active = $('.active').addClass('moveLeft');
  const right = $('.right').addClass('moveLeft');
  const previous = right.next().length > 0 ? right.next() : $('.md-carousel-item').first();
  previous.addClass('moveLeft');

  const index = right.index();
  $('.md-indicator.md-indicator-active').removeClass('md-indicator-active');
  $('.md-indicator').eq(index).addClass('md-indicator-active');

  setTimeout(function() {
    left.removeClass('left').addClass('hidden').removeClass('moveLeft');
    active.removeClass('active').addClass('left').removeClass('moveLeft');
    right.removeClass('right').addClass('active').removeClass('moveLeft');
    previous.removeClass('hidden').addClass('right').removeClass('moveLeft');
    animating = false;
  }, 1000);

  
  
}