$(document).ready(function(){

    $('.active .stocks-img').on('click', function(){
        var stocks_height = $(this).next();
        if ($(stocks_height).css('display') == 'none') 
        { 
            $(stocks_height).animate({height: 'show'}, 500); 
        } 
        else 
        {     
            $(stocks_height).animate({height: 'hide'}, 500); 
        } 
    });

});


