$(document).ready(function(){

    $('#personal-area-tabs').responsiveTabs({
        active: 0,
        duration: 500,
        animation: 'slide',
        startCollapsed: 'accordion'
    });

    $('.edit').on('click', function(){
        var content_edit = $(this).parent().find('p').html();
        $(this).parent().removeClass('active');
        $(this).parent().siblings().addClass('active');
        $(this).parent().siblings().find('input').val(content_edit);

    });

    $('.save').on('click', function(){
        var content_save = $(this).parent().find('input').val();
        $(this).parent().removeClass('active');
        $(this).parent().siblings().addClass('active');
        $(this).parent().siblings().find('p').html(content_save);
    });

    $('.edit_sms').on('click', function(){
        $('.tel_input_sms').addClass('active');
        $('.sms_btn_tel').addClass('active');

    });

    $('.save_sms').on('click', function(){
        $('.tel_input_sms').removeClass('active');
        $('.sms_btn_tel').removeClass('active');
    });



    $('.remove').on('click', function(){
        var remove_parend = $(this).parents('li');
        $('.deletion-popup').addClass('active');
        $('.deletion-popup .delete').on('click', function(){
            remove_parend.remove();
            $('.deletion-popup').removeClass('active');
        });
    });

    $('.cancel').on('click', function(){
        $('.deletion-popup').removeClass('active');
    });

    $('.close').on('click', function(){
        $('.review-popup').removeClass('active');
        $('.address-popup').removeClass('active');
        $('.deletion-popup').removeClass('active');
    });

    $('.close-popup').on('click', function(){
        $('.review-popup').removeClass('active');
        $('.address-popup').removeClass('active');
        $('.deletion-popup').removeClass('active');
    });

    $('.add-address').on('click', function(){
        $('.address-popup').addClass('active');
    });

    $('.like').on('click', function(){
        $('.review-popup').addClass('active');
    });

    $('.dislike').on('click', function(){
        $('.review-popup').addClass('active');
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