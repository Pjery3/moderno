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

$('.icon-th-list').on('click', function(){
  $('.products__item').addClass('list');
  $('.icon-th-list').addClass('active')
  $('.icon-th-large').removeClass('active')
})

$('.icon-th-large').on('click', function(){
  $('.products__item').removeClass('list')
  $('.icon-th-list').removeClass('active')
  $('.icon-th-large').addClass('active')
})

$('.product-one__tabs .tab').on('click', function(event) {
  var id = $(this).attr('data-id');
    $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
    $('.product-one__tabs .tabs').find('.tab').removeClass('active');
    $(this).addClass('active');
    $('#'+id).addClass('active-tab').fadeIn();
    return false;
  });


$('.menu__btn').on('click', function(){
  $('.menu__list').slideToggle();
})

$('.header__btn-menu').on('click', function(){
  $('.header__box').toggleClass('active');
})


  if($('.products__inner-box').length) {
    var mixer = mixitup('.products__inner-box');
  }

})