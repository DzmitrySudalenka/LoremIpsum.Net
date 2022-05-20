$(document).ready(function() {
  
  /* menu */

  $(".header__hamburger-btn, .header__backdrop").click(function() {
    
    $(".header").toggleClass('header--active');
    $(".header__top-bar").toggleClass('header__top-bar--active');
    $(".header__middle-bar").toggleClass('header__middle-bar--active');
    $(".header__bottom-bar").toggleClass('header__bottom-bar--active');
    $(".header__backdrop").toggleClass('header__backdrop--active');
    $("body").toggleClass('body--lock');
    
  });
  
  /* select */
  
  $("select").niceSelect();

  /* range */

  var range = $(".checkout__range");
  var rangeVal = $(".checkout__range-num");
  
  rangeVal.html(range.val());
  
  range.on('input', function() {
    rangeVal.html($(this).val());
  });
  
  /* go top */
  
  $(window).scroll(function () {
    
    if ($(this).scrollTop() > 300) {
      
      $('.go-top').fadeIn();
      
    } else {
      
      $('.go-top').fadeOut();
      
    }
    
  });
  
  $(".header__hamburger-btn, .header__backdrop").click(function() {
    
    $(".go-top").toggleClass('go-top--hidden');
    
  });
  
  $('.go-top').on('click', function(e) {
    
    e.preventDefault();
        
    $('html, body').animate({scrollTop: 0}, 1000);
    
  });

});