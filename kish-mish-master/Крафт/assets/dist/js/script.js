$(document).ready(function(){
    $('#authorization-tabs2').responsiveTabs({
        active: 0,
        duration: 500,
        animation: 'slide',
        startCollapsed: 'accordion'
    });

    $('.phone').mask('+7 (000) 000 00 00', {placeholder: "+7 (___) ___ __ __"});

    $('.open-menu').on('click', function(){
      $('.mobile-menu').toggleClass('active');
    });

    var header = $('header').outerHeight();
    var footer = $('footer').outerHeight();
    var footer_after = $('.footer-after').outerHeight();
  
    $('.footer').css({
      'padding-top': footer_after
    });

    $('body').css({
      // 'padding-top': header,
      'padding-bottom': footer + footer_after,
    });

    //$('.form-open').on('click', function(){
    //  $('.form-open').parent('form').addClass('active');
    //});
    $('.form-open').on('click', function(){
        $('.wpdreams_asl_container').toggleClass('active');
    });
    $('.search-popup').on('click', function(){
        $('.address_search-popup').addClass('active');
    });
    $('.close').on('click', function(){
        $('.address_search-popup').removeClass('active');

    });

    $('.close-popup').on('click', function(){
        $('.address_search-popup').removeClass('active');

    });
    $('.close-popup').on('click', function(){
        $('.valid5-popup').removeClass('active');
    });
    $('.close').on('click', function(){
        $('.valid5-popup').removeClass('active');
    });
    $('.open_valid5').on('click', function(){
        $('.valid5-popup').addClass('active');
    });
    $('.like').on('click', function(){
        $(this).toggleClass('active');

    });
    $('.dislike').on('click', function(){
        $(this).toggleClass('active');
    });
    $('.close').on('click', function(){
        $('.valid2-popup').removeClass('active');
    });

    $('.close-popup').on('click', function(){
        $('.valid2-popup').removeClass('active');
    });
    $('.close').on('click', function(){
        $('.valid3-popup').removeClass('active');
        $('.valid4-popup').removeClass('active');
    });

    $('.close-popup').on('click', function(){
        $('.valid3-popup').removeClass('active');
        $('.valid4-popup').removeClass('active');
    });
    $('.open_valid3').on('click', function(){
        $('.valid3-popup').addClass('active');
    });

});

$(window).resize(function(){

    var header = $('header').outerHeight();
    var footer = $('footer').outerHeight();
    var footer_after = $('.footer-after').outerHeight();
  
    $('.footer').css({
      'padding-top': footer_after
    });

    $('body').css({
      // 'padding-top': header,
      'padding-bottom': footer,
    });
  
});  