console.log("Welcome to my portfolio!");
  $(document).ready(function(){
    $(".nav-container").sticky({topSpacing:0});
  });

  $('.to-top').click(function() {
    $('body, html').animate({
        scrollTop: $('.header').offset().top
    }, 800);
});

  $('.to-work').click(function() {
    $('body, html').animate({
        scrollTop: $('.work').offset().top - 80
    }, 800);
});

  $('.to-skills').click(function() {
    $('body, html').animate({
        scrollTop: $('.tool-kit').offset().top - 100
    }, 800);
});

  $('.to-contact').click(function() {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top - 100
    }, 800);
});
