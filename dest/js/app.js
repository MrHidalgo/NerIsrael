'use strict';

/**
 * @name initObjectFitImages
 * @description Polyfill object-fit/object-position on <img>
 */
function initObjectFitImages() {
  var objFitImages = $('[objectFit-js]') || document.querySelectorAll('[objectFit-js]');

  objectFitImages(objFitImages);
}

/**
 * @name initSwiper
 * @description initialize Swiper in JS.
 */
function initSwiper() {
  var mySwiper = new Swiper('.swiper-container', {
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
    slidesPerView: 4,
    spaceBetween: 17,
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
      prevEl: '.swiper-button-prev'
    },

    on: {
      "slideChange": function slideChange() {
        // console.log("slideChange");
      }
    }
  });
}

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /**
   * @description Method call for execution
   */
  initSwiper();
  initObjectFitImages();

  /**
   *
   */
  _document.on('click', '[href="#"]', function (e) {
    e.preventDefault();
  });

  /**
   *
   */
  $('body').on('click', function (e) {
    var className = ".swiper-slide-menu, .swiper-slide-drop";

    if (!$(e.target).closest(className).length) {
      $("[featured-menu-js]").removeClass("is-show");
      $(".swiper-slide-drop").removeClass("is-open");
    }
  });

  /**
   * @description Main navigation
   */
  $("[menu-item-js]").on("click", function (e) {
    var elem = $(e.currentTarget);

    $("[menu-item-js]").removeClass("is-active");
    elem.addClass("is-active");
  });

  /**
   *
   */
  $("[featured-menu-js]").on("click", function (e) {
    e.preventDefault();

    var elem = $(e.currentTarget),
        elemAttrId = elem.attr("data-id");

    if (elem.hasClass("is-show")) {

      elem.removeClass("is-show");
      $(".swiper-slide-drop[data-drop='" + elemAttrId + "']").removeClass("is-open");
    } else {

      $("[featured-menu-js]").removeClass("is-show");
      $(".swiper-slide-drop").removeClass("is-open");

      elem.addClass("is-show");
      $(".swiper-slide-drop[data-drop='" + elemAttrId + "']").addClass("is-open");
    }
  });
});

/*!
*
* Include lib:
*
* */