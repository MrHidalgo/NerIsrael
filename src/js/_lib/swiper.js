

/**
 * @name initSwiper
 * @description initialize Swiper in JS.
 */
function initSwiper() {
  const mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    // autoplay: {
    //   delay: 5000,
    // },
    // Disable preloading of all images
    // preloadImages: false,
    // Enable lazy loading
    // lazy: {
    //   loadPrevNext: true,
    // },
    slidesPerView: 1,
    spaceBetween: 0,
    // width: 192,
    breakpoints: {
      // when window width is <= 320px
      320: {
        // slidesPerView: 1,
        // spaceBetween: 10
      },
      // when window width is <= 480px
      480: {
        // slidesPerView: 2,
        // spaceBetween: 20
      },
      // when window width is <= 640px
      640: {
        // slidesPerView: 3,
        // spaceBetween: 30
      }
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    on: {
      "slideChange": function () {
        // console.log("slideChange");
      },
    }
  });
}
