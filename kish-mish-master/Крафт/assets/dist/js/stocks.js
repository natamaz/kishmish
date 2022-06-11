$(document).ready(function(){

    $('.active .stocks-img').on('click', function(){
        var stocks_height = $(this).next();
        $(this).toggleClass('stocks-active');
        if ($(stocks_height).css('display') == 'none') 
        { 
            $(stocks_height).animate({height: 'show'}, 500); 
        } 
        else 
        {     
            $(stocks_height).animate({height: 'hide'}, 500); 
        } 
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
