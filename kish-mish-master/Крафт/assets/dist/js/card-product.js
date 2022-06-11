$(document).ready(function(){

    $('.products-item h4').matchHeight({
        byRow: true
    });
  
    $('.products-item p').matchHeight({
        byRow: true
    });
  
    $('.ingredients-item h4').matchHeight({
        byRow: false
    });

    $('.size-link li').on('click', function(){
        $('.size-link li').removeClass('active');
        $(this).addClass('active');
    });
  
    jcf.replaceAll();

    var header = $('header').outerHeight();

    $('body').css({
      'padding-top': header,
    });

});

$(window).resize(function(){

    var header = $('header').outerHeight();

    $('body').css({
      'padding-top': header,
    });
  
});  
