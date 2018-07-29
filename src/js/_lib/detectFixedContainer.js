

/**
 * @name detectFixedContainer
 * @description
 */
function detectFixedContainer(containerName, listenerBlockName) {

  /**
   *
   */
  const changeBlockSize = () => {
    const containerOffsetHeight = $(containerName).offset().top - $(window).scrollTop(),
      containerHeight = $(containerName).height();

    $(containerName + "__bg").css({
      "top" : containerOffsetHeight,
      "height" : containerHeight
    });
  };

  changeBlockSize();

  $(listenerBlockName).on("click", function() {
    changeBlockSize();
  });
}

