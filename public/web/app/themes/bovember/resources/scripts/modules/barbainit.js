import barba from '@barba/core';

import { Fancybox } from '@fancyapps/ui';
import jqueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
// make Isotope a jQuery plugin
jqueryBridget( 'isotope', Isotope, $ );
import LocomotiveScroll from 'locomotive-scroll';

export const barbainit = async (err) => {
  if (err) {
    console.error(err);
  }

  const scroll = new LocomotiveScroll();

  barba.init({
    views: [{
      namespace: 'home',
      beforeEnter() {
        $('#canvas #home.canvas').addClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {

      },
    }, {
      namespace: 'shows',
      beforeEnter() {
        $('#canvas #home.canvas').addClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        // Run Fancybox
        Fancybox.bind("[data-fancybox]", {
          // Your custom options
          closeButton: false,
        });
      },
    }, {
      namespace: 'music',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        // Run Isotope
        $('#album-row.isotope').isotope({
          // options
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
        });

        // Filter items on button click
        $('.album-types').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $('#album-row.isotope').isotope({ filter: filterValue });
        });
      },
    }, {
      namespace: 'videos',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        // Run Fancybox
        Fancybox.bind("[data-fancybox='gallery']", {
          // Your custom options
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

        scroll;
      },
    }, {
      namespace: 'photos',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
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

        scroll;
      },
    }, {
      namespace: 'shop',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        // Run shop scroll
        $('.product_type_simple').each(function () {
          if ($(this).hasClass('add_to_cart_button')) {
            $(this).append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160V112zm-48 48H48c-26.5 0-48 21.5-48 48V416c0 53 43 96 96 96H352c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48H336V112C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>');
          } else {
            $(this).append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7l-54.8-43V224H512V376L384 275.7V224H320v1.5L277.2 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L74.1 32.8 38.8 5.1zM36.8 192h85L21 112.5 6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM320 384H128V224H64V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V398.5l-64-50.4V384z"/></svg>');
          }
        });

        scroll;
      },
    }, {
      namespace: 'single-product',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        scroll;
      },
    }, {
      namespace: 'blog',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        scroll;
      },
    }, {
      namespace: 'blog-post',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        scroll;
      },
    }, {
      namespace: 'about',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').addClass('show');
      },
      afterEnter() {
        scroll;
      },
    }, {
      namespace: 'contact',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        
      },
    }],
  });
};

import.meta.webpackHot?.accept(barbainit);