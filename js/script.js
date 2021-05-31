$(document).ready(function() {
    $('.container3').carousel({
        num: 5,
        maxWidth: 420,
        maxHeight: 550,
        distance: 225,
        autoPlay: false,
        responsiveClass:true,
        responsive:{
          0:{
              items:1,
              nav:true
          },
          576:{
            num: 5,
            maxWidth: 120,
            maxHeight: 350,
            distance: 125,
          },
          1000:{
              items:5,
              nav:true,
              loop:false
          }
      }
    });
});

    $(".icon").click(function(){
        $(".dandik .image").removeClass("bam-image-width");
        $(".dandik").removeClass("bam-width");
        $(".dandik .text").removeClass("bam-text-width");
        $(".dandik .text").fadeOut(0.0001);
        $(".bamdik").addClass("bam-width");
        $(".bamdik .image").addClass("bam-image-width");
        $(".bamdik .text").fadeIn().addClass("bam-text-width");
        $(".middle .text").fadeOut(0.0001);
        $(".middle").addClass("mid-width");
        $(".middle .image").addClass("image-width");
        $(".middle .image i").removeClass("fas fa-minus").addClass("fas fa-plus");
        $(".bamdik .image i").removeClass("fas fa-plus").addClass("fas fa-minus");
        $(".dandik .image i").removeClass("fas fa-minus").addClass("fas fa-plus");
    });
    $(".icon-middle").click(function(){
        $(".dandik .image").removeClass("bam-image-width");
        $(".dandik").removeClass("bam-width");
        $(".dandik .text").removeClass("bam-text-width");
        $(".dandik .text").fadeOut(0.0001);
        $(".bamdik").removeClass("bam-width");
        $(".bamdik .image").removeClass("bam-image-width");
        $(".bamdik .text").removeClass("bam-text-width");
        $(".bamdik .text").fadeOut(0.0001);
        $(".middle .text").fadeIn();
        $(".middle").removeClass("mid-width");
        $(".middle .image").removeClass("image-width");
        $(".middle .image i").removeClass("fas fa-plus").addClass("fas fa-minus");
        $(".bamdik .image i").removeClass("fas fa-minus").addClass("fas fa-plus");
        $(".dandik .image i").removeClass("fas fa-minus").addClass("fas fa-plus");
    });
    $(".icon-dandik").click(function(){
        $(".middle .text").fadeOut(0.0001);
        $(".middle").addClass("mid-width");
        $(".middle .image").addClass("image-width");
        $(".dandik").addClass("bam-width");
        $(".dandik .image").addClass("bam-image-width");
        $(".dandik .text").fadeIn().addClass("bam-text-width");
        $(".bamdik").removeClass("bam-width");
        $(".bamdik .image").removeClass("bam-image-width");
        $(".bamdik .text").removeClass("bam-text-width");
        $(".bamdik .text").fadeOut(0.0001);
        $(".dandik .image i").removeClass("fas fa-plus").addClass("fas fa-minus");
        $(".middle .image i").removeClass("fas fa-minus").addClass("fas fa-plus");
        $(".bamdik .image i").removeClass("fas fa-minus").addClass("fas fa-plus");
    });

    $('.card-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
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
                      