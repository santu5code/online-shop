$(document).ready(function(){
    $(".slider-one").slick({
        dots: true,
        autoplay:true,
        autoplaySpeed:6000,
        prevArrow:$(".prev"),
        nextArrow:$(".next")

    });
});

$(document).ready(function(){
    $(".slider-two").slick({
        prevArrow:$(".pre"),
        nextArrow:$(".nex"),
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:3000,
    });
});
