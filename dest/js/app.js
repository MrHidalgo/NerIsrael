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
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    freeMode: false,
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",
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
    // spaceBetween: 0,
    // width: 192,
    // breakpoints: {
    // when window width is <= 320px
    // 320: {
    // slidesPerView: 1,
    // spaceBetween: 10
    // },
    // when window width is <= 480px
    // 480: {
    // slidesPerView: 2,
    // spaceBetween: 20
    // },
    // when window width is <= 640px
    // 640: {
    // slidesPerView: 3,
    // spaceBetween: 30
    // }
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }

    // on: {
    //   "slideChange": function () {
    // console.log("slideChange");
    // },
    // }
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
  closeMobileMenu();

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
    var className = ".swiper-slide-menu, .swiper-slide-drop, .search__label, .mainr__search-label, .search__keyboard, .table__menu, .table__drop";

    if (!$(e.target).closest(className).length) {
      $("[featured-menu-js]").removeClass("is-show");
      $(".swiper-slide-drop").removeClass("is-open");

      $("[search-keyboard-js]").removeClass("is-active");
      $(".search__keyboard").fadeOut(300);

      $(".table__menu").removeClass("is-active");
      $(".table__drop").removeClass("is-open");
    }
  });

  /**
   * @description Main navigation
   */
  $("[menu-item-js]").on("click", function (e) {
    var elem = $(e.currentTarget);

    if (_window.width() < 778) {
      if (elem.hasClass("is-active")) {
        console.log('if drop');
        elem.find(".nav__link-drop").slideUp(300);
      } else {
        console.log('else drop');
        $(".nav__link-drop").hide();
        elem.find(".nav__link-drop").slideDown(300);
      }
    }

    if (elem.hasClass("is-active")) {
      console.log('if btn');
      elem.removeClass("is-active");
    } else {
      console.log('else btn');
      $("[menu-item-js]").removeClass("is-active");
      elem.addClass("is-active");
    }
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

  /**
   *
   */
  $("[hamburger-btn-js]").on("click", function (e) {
    var mobileMenuContainer = $(".header__middle"),
        hideScrollElem = $("html, body");

    $(e.currentTarget).toggleClass("is-active");
    mobileMenuContainer.toggleClass("is-show");
    hideScrollElem.toggleClass("is-hideScroll");
  });
  function closeMobileMenu() {
    $(".header__middle-wrap").on("click", function (e) {
      var hamburgerBtn = $("[hamburger-btn-js]"),
          mobileMenuContainer = $(".header__middle"),
          hideScrollElem = $("html, body");

      hamburgerBtn.removeClass("is-active");
      mobileMenuContainer.removeClass("is-show");
      hideScrollElem.removeClass("is-hideScroll");
    });
  }

  /**
   *
   */
  $("[table-head-js]").on("click", function (e) {
    var elem = $(e.currentTarget),
        bodyContainer = elem.closest(".table__row").find("[talbe-body-js]");

    if (_window.width() < 768) {

      if (elem.hasClass("is-open")) {
        elem.removeClass("is-open");
        bodyContainer.removeClass("is-show");
      } else {
        elem.closest(".table").find("[talbe-body-js]").removeClass("is-show");
        elem.closest(".table").find("[table-head-js]").removeClass("is-open");

        elem.toggleClass("is-open");
        bodyContainer.toggleClass("is-show");
      }
    }
  });

  /**
   *
   */
  $("[list-title-js]").on("click", function (e) {
    var elem = $(e.currentTarget),
        parentContainer = elem.closest(".list__row"),
        showContainer = elem.siblings(".list__row-wrapper");

    if (_window.width() < 767) {
      parentContainer.toggleClass("is-hide");
      showContainer.slideToggle(500);
    }
  });

  /**
   *
   */
  $("[individual-btn-js]").on("click", function (e) {
    var elem = $(e.currentTarget),
        elemAttrId = elem.attr("data-name");

    $("[individual-btn-js]").removeClass("is-active");
    elem.addClass("is-active");
  });

  /**
   *
   */
  $("[playlist-btn-js]").on("click", function (e) {
    var elem = $(e.currentTarget),
        tableWrap = elem.closest(".playlist__row").find(".playlist__body");

    elem.toggleClass("is-active");
    tableWrap.slideToggle(300);
  });

  /**
   *
   */
  $("[search-keyboard-js]").on("click", function (e) {
    var elem = $(e.currentTarget),
        keyboard = elem.closest("[search-wrap-js]").find(".search__keyboard"),
        visibleKeyboard = $(".search__keyboard");

    if (_window.width() > 767) {

      if (visibleKeyboard.is(":visible")) {
        visibleKeyboard.closest("[search-wrap-js]").find("label").removeClass("is-active");
        visibleKeyboard.fadeOut(300);
      }

      elem.toggleClass("is-active");
      keyboard.fadeToggle(300);
    }
  });

  /**
   *
   */
  $(".result__box-head").on("click", function (e) {
    var elem = $(e.currentTarget),
        resultDataWrap = elem.closest(".result__box").find("[result-body-js]");

    resultDataWrap.slideToggle(300);
  });

  /**
   *
   */
  $(".table__menu").on("click", function (e) {
    var elem = $(e.currentTarget);

    /**
     *
     */
    function removeHideDrop() {
      $(".table__menu").removeClass("is-active");
      $(".table__drop").removeClass("is-open");
    }

    if (elem.hasClass("is-active")) {
      removeHideDrop();
    } else {
      removeHideDrop();

      elem.addClass("is-active");
      elem.siblings(".table__drop").addClass("is-open");
    }
  });

  /**
   *
   */
  var initSelectricJs = function initSelectricJs() {
    var $select = $("select");

    $select.selectric({
      responsive: true,
      inheritOriginalWidth: true,
      disableOnMobile: false
    });
  };
  initSelectricJs();

  /**
   *
   */
  $(".mainc__block-head").on("click", function (e) {
    var elem = $(e.currentTarget),
        mainCategoryDataWrap = elem.closest(".mainc__block").find("[maincBlock-body-js]");

    mainCategoryDataWrap.slideToggle(300);
  });
  $("[maincBlock-btn-js]").on("click", function (e) {
    var elem = $(e.currentTarget);

    if (!elem.hasClass("is-active")) {
      elem.find("span").html("hide more");
    } else {
      elem.find("span").html("show more");
    }

    elem.toggleClass("is-active");
    $(".is-hide-mobile").toggleClass("is-show");
  });
});

/*!
*
* Include lib:
*
* */