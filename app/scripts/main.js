  $(document).ready(function(){
    $(".nav-container").sticky({topSpacing:0});
  });

  function onScroll(e) {
    window.scrollY >= origOffsetY ? nav.classList.add('sticky') :
                                    nav.classList.remove('sticky');
  }

  document.addEventListener('scroll', onScroll);

  $('.to-top').click(function() {
    $('body').animate({
        scrollTop: $('.header').offset().top
    }, 800);
});

  $('.to-work').click(function() {
    $('body').animate({
        scrollTop: $('.work').offset().top - 60
    }, 800);
});

  $('.to-skills').click(function() {
    $('body').animate({
        scrollTop: $('.tool-kit').offset().top - 80
    }, 800);
});

  $('.to-contact').click(function() {
    $('body').animate({
        scrollTop: $('.contact').offset().top - 80
    }, 800);
});
