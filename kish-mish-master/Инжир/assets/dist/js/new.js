$(window).scroll(function(){
    $('header').toggleClass('header-background', $(this).scrollTop() > 100);

});
