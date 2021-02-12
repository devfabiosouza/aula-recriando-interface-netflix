var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 3,
    loop:true,
    margin: 10,
    autoplay:true,
    autoplayTimeout:1400,
    autoplayHoverPause:true
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:1,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:5,
            loop:false
        }
    }
})


$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

