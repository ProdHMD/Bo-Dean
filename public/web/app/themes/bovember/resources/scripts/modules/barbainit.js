import barba from '@barba/core';
import { Fancybox } from '@fancyapps/ui';
import { bg } from './bg.js';
import { locomotive } from './locomotive.js';
import { shop } from './shop.js';
import { isotopeinit } from './isotopeinit.js';

export const barbainit = async (err) => {
  if (err) {
    console.error(err);
  }

  barba.hooks.after(() => {
    // Init bgJS
    bg();

    // Init locomotiveJS
    locomotive();

    // Init shopJS
    shop();

    // Init isotopeJS
    isotopeinit();
  });

  barba.init({
    transitions: [{
      name: 'default-transition',
      leave() {
        // empty default transition
      },
      enter() {
        // empty default transition
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class="([^""]*)"/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
    }],
    views: [{
      namespace: 'home',
      beforeEnter() {
        $('#canvas #home.canvas').addClass('show');
        $('#canvas #about.canvas').removeClass('show');
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
          closeButton: false,
        });
      },
    }, {
      namespace: 'music',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      namespace: 'album',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        locomotive;
      },
    }, {
      namespace: 'videos',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
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
      },
    }, {
      namespace: 'photos',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      namespace: 'gallery',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
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
      },
    }, {
      namespace: 'shop',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      namespace: 'single-product',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      namespace: 'blog',
      beforeEnter() {
        $('#canvas #home.canvas').show('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      namespace: 'blog-post',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      namespace: 'about',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').addClass('show');
      },
    }, {
      namespace: 'contact',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }],
  });
};

import.meta.webpackHot?.accept(barbainit);