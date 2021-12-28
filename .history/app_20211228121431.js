$(document).ready(function () {
    console.log(123);
        $(".about__list").slick({
          dots: true,
          infinite: true,
          speed: 300,
          slidesToShow: 1,
          adaptiveHeight: true,
        });
      });
