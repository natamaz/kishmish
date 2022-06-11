$(document).ready(function(){

    $('.news-item h3').matchHeight({
        byRow: false
    });

    $('.news-item p').matchHeight({
        byRow: false
    });

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

