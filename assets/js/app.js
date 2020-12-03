
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    $('.categories-btn__title').click(function(){
        console.log('document is working!!!! ');
        $('body').toggleClass('dark'); 
       $('.categories-menu').toggleClass('opened');
    })