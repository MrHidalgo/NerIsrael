

/**
 * @description Window on load.
 */
$(window).on("load", (ev) => {
  if($(window).width() < 768) {
    detectFixedContainer(".timely", ".table--timely");
    detectFixedContainer(".recently", ".table--recently");
  }
});


/**
 * @description Window on resize.
 */
$(window).on("resize", (ev) => {
  if($(window).width() < 768) {
    detectFixedContainer(".timely", ".table--timely");
    detectFixedContainer(".recently", ".table--recently");
  }
});


/**
 * @description Window on scroll.
 */
$(window).on("scroll", (ev) => {
  if($(window).width() < 768) {
    detectFixedContainer(".timely", ".table--timely");
    detectFixedContainer(".recently", ".table--recently");
  }
});

