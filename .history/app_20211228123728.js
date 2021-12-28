$(document).ready(function () {
    
        $(".about__list").slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            nextArrow: '<button class="slick-next slick"><ion-icon name="chevron-forward-outline"></ion-icon></button>',
        prevArrow: '<button class=".lick-prev"><ion-icon name="chevron-back-outline"></ion-icon></button>',
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
      
