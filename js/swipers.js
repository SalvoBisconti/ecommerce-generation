const swiper = new Swiper('.swiper-hero', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slidesPerView: 'auto',
      breakpoints: {
        768: {
          slidesPerView: 1,
          spaceBetween: 40
        },
        992: {
          slidesPerView: 1,
          spaceBetween: 50
        }, 
        1200: {
          slidesPerView: 1,
          spaceBetween: 50
        }
      },
      autoplay: {
        delay: 5000,
        disableOnInteraction: true,
      },

      // // If we need pagination
      // pagination: {
      //   el: '.swiper-pagination',
      // },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
      });

      
  var swiper_prodotti = new Swiper('.swiper_prodotti', {
    slidesPerView: 5,
    spaceBetween: 10,
    centeredSlides: true,
    centeredSlidesBounds: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      1600: {
        slidesPerView: 5,
        spaceBetween: 0
      }
    },
    // direction: getDirection(),
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    preventClicks: false,
    preventClicksPropagation: false
  });

  // function getDirection() {
  //   var windowWidth = window.innerWidth;
  //   // var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

  //   return direction;
  // }