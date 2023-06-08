import { Fancybox } from '@fancyapps/ui';
import LocomotiveScroll from 'locomotive-scroll';

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
      // Your custom options
      closeButton: false,
    });
  }

  /** The videos page fancybox function */
  function videos() {
    // Run new Locomotive scroll instance
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });

    // Run Fancybox
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
      on: {
        reveal: (fancybox, slide) => {
          const target = document.getElementById(`youtube-item-id${slide.index}`);
          if (fancybox.isCurrentSlide(slide)) {
            scroll.scrollTo(target, {offset: -250});
          }
        },
      },
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
    Fancybox.bind("[data-fancybox]", {
      // Your custom options
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