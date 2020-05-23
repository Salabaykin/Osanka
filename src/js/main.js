$(document).ready(function(){
  $('.progress-slider').slick({
    arrows: false,
    fade: true,
    cssEase: 'linear',
    asNavFor: '.progress-slider__dots',
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false
  });

  $('.progress-slider__dots').slick({
    slidesToShow: 3,
    arrows: false,
    asNavFor: '.progress-slider',
    focusOnSelect: true
  });
});