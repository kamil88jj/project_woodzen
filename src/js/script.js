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
    
    
    $("a[href^='#up']").click(function() {
    
        const _href = $(this).attr("href");
    
            $('html, body').animate({
            scrollTop: $(_href).offset().top+"px"});
            return false;
        });
    
});




