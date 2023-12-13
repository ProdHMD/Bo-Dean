import { Fancybox } from '@fancyapps/ui';

export const fancyboxinit = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run function by specific pages */
  if ($.inArray($('main').attr('id'), ['shows']) >= 0) {
    shows();
  } else if ($.inArray($('main').attr('id'), ['videos']) >= 0) {
    videos();
  } else if ($.inArray($('main').attr('id'), ['gallery']) >= 0) {
    photos();
  }

  /** The shows page fancybox function */
  function shows() {
    // Run Fancybox
    Fancybox.bind("[data-fancybox]", {
      closeButton: false,
    });
  }

  /** The videos page fancybox function */
  function videos() {
    // Run Fancybox
    Fancybox.bind("[data-fancybox='videos']", {
      animated: true,
      id: 'videos',
      closeButton: true,
      placeFocusBack: false,
      Images: {
        initialSize: "fit",
      },
      Thumbs: {
        type: 'classic',
      },
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['close'],
        },
      },
    });
  }

  /** The photos page fancybox function */
  function photos() {
    // Run Fancybox
    Fancybox.bind("[data-fancybox='gallery']", {
      animated: true,
      id: 'photos',
      closeButton: false,
      Carousel: {
        Dots: {
          minCount: 2,
        },
      },
      Images: {
        initialSize: "fit",
      },
      Thumbs: false,
      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ['close'],
        },
      },
    });
  }
};

import.meta.webpackHot?.accept(fancyboxinit);