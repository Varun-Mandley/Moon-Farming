$('.owl-carousel').owlCarousel({
    loop:true,
    margin:150,
    autoplay:true,
    autoplayTimeout:2000,
    dots:true,
    nav:false,
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
})

$(document).ready(function () {
    $(window).scroll(function () { 
        if(scrollY >= 2548){
            $(".wrap-12 button").fadeIn();
        }
        else{
            $(".wrap-12 button").fadeOut();

        }
        
    });
    $(".wrap-12 button").click(function (e) { 
        e.preventDefault();
        $(" .hom , html , body").animate({scrollTop:0})
        
    });
});

$(document).ready(function () {
    $(".wrap-1 .mob" ).click(function (e) { 
        e.preventDefault();
        $(this).toggleClass("active");
        $(".wrap-2 .flex-box").slideToggle();
    });
    $(".wrap-1 .mob" ).focusout(function (e) { 
        e.preventDefault();
        $(".wrap-2 .flex-box").slideUp();
        $(".wrap-1 .mob").removeClass("active");
        
    });
});

$('.wrap-2 ul a').on("click", function (e) {
    e.preventDefault();
    var href = $(this).attr("href");
    var pos = $(href).offset().top;
    $('html , body').animate({ scrollTop: pos-10 })
});