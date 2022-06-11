$(document).ready(function(){

    $('.products-item h4').matchHeight({
        byRow: true
    });
  
    $('.products-item p').matchHeight({
        byRow: true
    });
    
    jcf.replaceAll();

    $('.close').on('click', function(){
        $('.address-popup').removeClass('active');
        $('.confirmation-popup').removeClass('active');
        $('.valid-popup').removeClass('active');
    });

    $('.close-popup').on('click', function(){
        $('.address-popup').removeClass('active');
        $('.confirmation-popup').removeClass('active');
        $('.valid-popup').removeClass('active');
    });

    var header = $('header').outerHeight();

    $('body').css({
      'padding-top': header,
    });

});

$('.add-address').on('click', function(){
    $('.address-popup').addClass('active');
});
$(window).resize(function(){

    var header = $('header').outerHeight();

    $('body').css({
      'padding-top': header,
    });
  
});  