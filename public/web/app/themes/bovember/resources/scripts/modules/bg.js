export const bg = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Set height and width */
  function setCanvas() {
    var viewportHeight = $(window).innerHeight();
    var viewportWidth = $(window).innerWidth();
    var videoHeight = viewportHeight;
    var videoWidth = Math.round(viewportHeight / 9 * 16);

    $('.canvas').height(viewportHeight).width(viewportWidth);
    $('.canvas').children('.background-media').height(videoHeight).width(videoWidth);
  }
  setCanvas();

  /** Add resize listener */
  $(window).on('resize', function() {
    setCanvas();
  });
};

import.meta.webpackHot?.accept(bg);