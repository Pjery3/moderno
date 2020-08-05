$(function () {



  $('.rate-star').rateYo({
    halfStar: true,
    starWidth: "13px",
    rating: 5,
    readOnly: true,
  });

  $('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,

  })

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    prefix: "$"

});

  if($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  }

})