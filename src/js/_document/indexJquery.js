

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


  /**
   *
   */
  _document.on('click', '[href="#"]', (e) => {
    e.preventDefault();
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
});

