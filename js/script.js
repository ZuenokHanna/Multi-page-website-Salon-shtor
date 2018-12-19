$(document).ready(function() {

  $('.slider').slick({
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.slider-mebel').slick({
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.slider-sun').slick({
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.desgn-slider').slick({
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    fade: true,
    autoplaySpeed: 4000,
    autoplay: true
  });

  $('.desgn-slider2').slick({
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    fade: true,
    autoplaySpeed: 4000,
    autoplay: true
  });

  $('.slider_shop').owlCarousel({
    navigation : true, // Show next and prev buttons
    items:1,
    animateOut: 'fadeOut',
    autoplay: true

  });

  $('.slider_our_work').owlCarousel({
    center: true,
    loop:true,
    autoWidth:true,
    margin:15,
    autoplay: true
  });

  $('.photo_salon').owlCarousel({
    center: false,
    loop:true,
    autoWidth:true,
    margin:15,
    autoplay: false
  });

  $('.topmenu_item').click(function() {
    if ($('.open').length) {
      if (!$(this).hasClass('open')) {
        $('.open li').slideToggle();
        $('.open').removeClass('open');
      }
    }
    $(this).children().children('li').slideToggle();
    $(this).toggleClass('open');

  });


  $(".btn_hamburger").click(function() {
    $(this).toggleClass("on");
    $(".main-menu").slideToggle();
    return false;
  });

  $('.slider_slider_info').slick({
    infinite: false,
    autoplay: false,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: true,
        dots: false,
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        fade: true,
        slidesToShow: 1
      }
    }]
  });

  $('.slider_karnizy').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1200,
      settings: {
        arrows: false,
        dots: false,
        slidesToShow: 1
      }
    }, {
      breakpoint: 768,
      settings: {
        arrows: false,
        dots: true,
        fade: true,
        slidesToShow: 1
      }
    }]
  });

  $(".topmenu li span a").click(function() {
    $("html, body").animate({
     scrollTop: $($(this).attr("href")).offset().top - 120 + "px"
   }, {
     duration: 500,
     easing: "swing"
   });
    return false;
  })

  $('.owl-carousel-banner').owlCarousel({
    animateOut: 'fadeOut',
    items:1,
    dots:false,
    nav: false,
    navText: [],
    autoplay: true
  });

    $('.owl-carousel-diz-page').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    items:1,
    dots:true,
    nav: false,
    autoplay: true
  });

    $('.parallax-demo').parallaxBackground({
      event: 'mouse_move',
      animation_type: 'shift',
      animate_duration: 2
    });

  $('.owl-home').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  navText: [],
  dots:false,
  autoplay:true,
  responsive:{
    0:{
      items:1
    },
    768:{
      items:2
    },
    1600:{
      items:3
    },
    3000:{
      items:6
    }
  }
})

 });


