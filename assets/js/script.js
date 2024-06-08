// Single Item Carousel
if ($('.single-item-carousel').length) {
    $('.single-item-carousel').owlCarousel({
        //animateOut: 'fadeOut',
        //animateIn: 'fadeIn',
        loop:true,
        margin:0,
        nav:true,
        //autoHeight: true,
        smartSpeed: 500,
        autoplay: 6000,
        navText: [ '<span class="fa-solid fa-angle-left fa-fw"></span>', '<span class="fa-solid fa-angle-right fa-fw"></span>' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            800:{
                items:1
            },
            1024:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
}
