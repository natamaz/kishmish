$(document).ready(function(){

    $('#authorization-tabs').responsiveTabs({
        active: 0,
        duration: 500,
        animation: 'slide',
        startCollapsed: 'accordion'
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

