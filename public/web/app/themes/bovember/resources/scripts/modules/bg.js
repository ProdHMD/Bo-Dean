export const bg = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Set height and width */
  function setCanvas() {
    // Set viewport variables
    var viewportHeight = $(window).innerHeight();
    var viewportWidth = $(window).innerWidth();

    // Set videoHeight and videoWidth variables
    var videoHeight = Math.round(viewportWidth / 16 * 9);
    var videoWidth = viewportWidth;

    if (videoHeight < viewportHeight) {
      videoHeight = viewportHeight;
      videoWidth = Math.round(videoHeight / 9 * 16);
    } else {
      videoHeight = Math.round(viewportWidth / 16 * 9);
      videoWidth = viewportWidth;
    }

    // Run the scripts on the canvas
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