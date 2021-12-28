$(document).ready(function () {
    
        $(".about__list").slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            nextArrow: document.getElementById('slick-next').classList.add("hide"),
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 480,
                settings: {
                  arrows: false,
                  centerMode: true,
                  centerPadding: '40px',
                  slidesToShow: 1
                }
              }
            ]
        });
      });
      
