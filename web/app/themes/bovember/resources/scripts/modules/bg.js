export const bg = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run onPage function */
  $('#canvas #home.canvas').removeClass('show');
  $('#canvas #about.canvas').removeClass('show');
  onPage();

  /** Turn on background if on certain pages */
  function onPage() {
    // Pass thru the show class to the correpsonding canvas element
    if ($.inArray($('main').attr('id'), ['home','shows','blog']) >= 0) {
      $('#canvas #home.canvas').addClass('show');
      $('#canvas #about.canvas').removeClass('show');
      setCanvas();
    } else if ($.inArray($('main').attr('id'), ['about']) >= 0) {
      $('#canvas #about.canvas').addClass('show');
      $('#canvas #home.canvas').removeClass('show');
      setCanvas();
    } else {
      $('#canvas #home.canvas').removeClass('show');
      $('#canvas #about.canvas').removeClass('show');
    }

    // Add resize listener
    $(window).on('resize', function() {
      setCanvas();
    });
  }

  /** Set height and width of canvas */
  function setCanvas() {
    // Set viewport variables
    var viewportHeight = $(window).innerHeight();
    var viewportWidth = $(window).innerWidth();

    // Set videoHeight variables
    var videoHeight = Math.round(viewportWidth / 16 * 9);
    var videoWidth = viewportWidth;

    // Set videoHeight and videoWidth if videoHeight <> viewportHeight
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
};

import.meta.webpackHot?.accept(bg);