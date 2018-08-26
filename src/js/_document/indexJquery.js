

/**
 * @description Document DOM ready.
 */
$(document).ready((ev) => {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  const _document = $(document),
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
  _document.on('click', '[href="#"]', (e) => {
    e.preventDefault();
  });


  /**
   *
   */
  $('body').on('click', function (e) {
    const className = ".swiper-slide-menu, .swiper-slide-drop, .search__label, .search__keyboard";

    if (!$(e.target).closest(className).length) {
      $("[featured-menu-js]").removeClass("is-show");
      $(".swiper-slide-drop").removeClass("is-open");

      $("[search-keyboard-js]").removeClass("is-active");
      $(".search__keyboard").fadeOut(300);
    }
  });


  /**
   * @description Main navigation
   */
  $("[menu-item-js]").on("click", (e) => {
    const elem = $(e.currentTarget);

    $("[menu-item-js]").removeClass("is-active");
    elem.addClass("is-active");
  });


  /**
   *
   */
  $("[featured-menu-js]").on("click", (e) => {
    e.preventDefault();

    const elem = $(e.currentTarget),
      elemAttrId = elem.attr("data-id");

    if(elem.hasClass("is-show")) {

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
  $("[hamburger-btn-js]").on("click", (e) => {
    const mobileMenuContainer = $(".header__middle"),
      hideScrollElem = $("html, body");

    $(e.currentTarget).toggleClass("is-active");
    mobileMenuContainer.toggleClass("is-show");
    hideScrollElem.toggleClass("is-hideScroll");
  });
  function closeMobileMenu() {
    $(".header__middle-wrap").on("click", (e) => {
      const hamburgerBtn = $("[hamburger-btn-js]"),
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
  $("[table-head-js]").on("click", (e) => {
    const elem = $(e.currentTarget),
      bodyContainer = elem.closest(".table__row").find("[talbe-body-js]");

    if(_window.width() < 768) {

      if(elem.hasClass("is-open")) {
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
  $("[list-title-js]").on("click", (e) => {
    const elem = $(e.currentTarget),
      parentContainer = elem.closest(".list__row"),
      showContainer = elem.siblings(".list__row-wrapper");

    if(_window.width() < 767) {
      parentContainer.toggleClass("is-hide");
      showContainer.slideToggle(500);
    }
  });


  /**
   *
   */
  $("[individual-btn-js]").on("click", (e) => {
    const elem = $(e.currentTarget),
      elemAttrId = elem.attr("data-name");

    $("[individual-btn-js]").removeClass("is-active");
    elem.addClass("is-active");
  });


  /**
   *
   */
  $("[playlist-btn-js]").on("click", (e) => {
    const elem = $(e.currentTarget),
      tableWrap = elem.closest(".playlist__row").find(".playlist__body");

    elem.toggleClass("is-active");
    tableWrap.slideToggle(300);
  });


  /**
   *
   */
  $("[search-keyboard-js]").on("click", (e) => {
    const elem = $(e.currentTarget),
      keyboard = $(".search__keyboard");

    if(_window.width() > 767) {
      elem.toggleClass("is-active");
      keyboard.fadeToggle(300);
    }
  });
});

