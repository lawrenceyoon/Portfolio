$(document).ready(function () {

  /* ----- Nav smooth scroll ----- */
$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) {
            return false;
          } else {
            $target.attr('tabindex','-1');
            $target.focus();
          };
        });
      }
    }
  });

  /* ----- Scroll Animations (First Visit) ----- */
  /* Fade In (About section) */
  $('.fadeInUp-animate').waypoint(function(direction) {
    $('.fadeInUp-animate').addClass('animated fadeInUp');
  }, {
    offset: '50%'
  });

  /* Fade In Right/Left (Projects section) */
  $('.fadeInLeft-animate').waypoint(function(direction) {
    $('.fadeInLeft-animate').addClass('animated fadeInLeft');
  }, {
    offset: '50%'
  });

  $('.fadeInLeft-animate-2').waypoint(function(direction) {
    $('.fadeInLeft-animate-2').addClass('animated fadeInLeft');
  }, {
    offset: '50%'
  });

  $('.fadeInRight-animate').waypoint(function(direction) {
    $('.fadeInRight-animate').addClass('animated fadeInRight');
  }, {
    offset: '50%'
  });

  /* Pulse (Contact section) */
  $('.pulse-animate').waypoint(function(direction) {
    $('.pulse-animate').addClass('animated pulse');
  }, {
    offset: '50%'
  });

});
