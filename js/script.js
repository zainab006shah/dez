$(document).ready(function(){
    $('.sale__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 970,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                slidesToShow: 1
            }
        }
        ]
    });

    $('.menu__button').click(function(){
        $('.header__nav').addClass('nav--active');
    });

    $('.menu__close').click(function(){
        $('.header__nav').removeClass('nav--active');
    });
    
    $('.menu__list-link').click(function(){
        $('.header__nav').removeClass('nav--active');
    });
});


