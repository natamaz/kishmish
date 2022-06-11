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
    });

    $('.close-popup').on('click', function(){
        $('.address-popup').removeClass('active');
        $('.confirmation-popup').removeClass('active');
        $('.valid-popup').removeClass('active');
    });

    $('.add-address').on('click', function(){
        $('.address-popup').addClass('active');
        $('.valid-popup').removeClass('active');
    });
});


