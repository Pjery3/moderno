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

    var mixer = mixitup('.products__inner-box');


})