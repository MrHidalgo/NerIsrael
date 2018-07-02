

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

  /**
   * @description Main navigation
   */
  $("[menu-item-js]").on("click", (e) => {
    const elem = $(e.currentTarget);

    $("[menu-item-js]").removeClass("is-active");
    elem.addClass("is-active");
  });
});

