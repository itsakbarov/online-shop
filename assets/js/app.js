$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    nav: true,
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
    $('.fade').slick({
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        fade: true,
        cssEase: 'linear'
    });

});



$('.categories-btn__title').click(function () {
    console.log('document is working!!!! ');
    $('.overlay').toggle();
    $('.categories-menu').css('display', 'flex');
});

$('.overlay').click(function () {
    $('.overlay').hide();
    $('.categories-menu').hide();
});
$('.dropdown_content').hover(function () {
    $('.dropdown_menu').css('transform', 'rotateX(0)')
});

$('.close-btn').click(function (e) {
    e.preventDefault;
    $('.overlay').hide();
    $('.categories-menu').hide();
});