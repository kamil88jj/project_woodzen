$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        nav: true,
        loop: true,
        dotsEach: 3,
    });


    //SCROLL
    $(window).scroll(function() {
        if ($(this).scrollTop() > 1800) {
            $('.arrowUp').fadeIn();
        } else {
            $('.arrowUp').fadeOut();
        }
    });
    
    //Arrow Up
    $("a[href^='#up']").click(function() {
    
        const _href = $(this).attr("href");
    
            $('html, body').animate({
            scrollTop: $(_href).offset().top+"px"});
            return false;
        });


    //adding prices
    // $('.minus').click(function () {
    //     var $input = $(this).parent().find('input');
    //     var count = parseInt($input.val()) - 1;
    //     count = count < 1 ? 1 : count;
    //     $input.val(count);
    //     $input.change();
    //     return false;
    // });
    // $('.plus').click(function () {
    //     var $input = $(this).parent().find('input');
    //     $input.val(parseInt($input.val()) + 1);
    //     $input.change();
    //     return false;
    // });


});