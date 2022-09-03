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
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    
    //basket
        $('.smart-basket__wrapper').smbasket({
            productElement: 'клас обвертки карточки товара',
            buttonAddToBasket: 'клас кнопки купить',
            productPrice: 'product__price-number',
            productSize: 'product__size-element',
            
            productQuantityWrapper: 'product__quantity',
            smartBasketMinArea: 'класс корзины',
            countryCode: '+7',
            smartBasketCurrency: '₽',
            smartBasketMinIconPath: './smartbasket/img/shopping-basket-wight.svg',

            agreement: {
                isRequired: true,
                isChecked: true,
                isLink: 'https://artstranger.ru/privacy.html',
            },
            nameIsRequired: false,
        });

});