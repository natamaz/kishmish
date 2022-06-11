$(document).ready(function(){

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