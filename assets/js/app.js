$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$(document).ready(function () {
    $('.carousel').slick({
        dots: false,
        infinite: true,
        speed: 500,
        loop: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.popular-item__wrapper').slick({
        dots: false,
        infinite: true,
        speed: 500,
        loop: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

});



$('.categories-btn__title').click(function () {
    console.log('document is working!!!! ');
    $('.overlay').css('height', '100vh');
    $('body').css('overflow', 'hidden')
    $('.categories-menu').css('height', '450px');
});

$('.overlay').click(function () {
    $('.overlay').css('height', '0');
    $('body').css('overflow', 'visible')
    $('.categories-menu').css('height', '0');
});
$('.dropdown_content').hover(function () {
    $('.dropdown_menu').css('transform', 'rotateX(0)')
});

$('.close-btn').click(function (e) {
    e.preventDefault;
    $('body').css('overflow', 'visible')
    $('.overlay').css('height', '0');
    $('.categories-menu').hide();
});