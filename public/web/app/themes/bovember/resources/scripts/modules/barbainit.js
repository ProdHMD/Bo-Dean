import barba from '@barba/core';
import { Fancybox } from '@fancyapps/ui';
import { bg } from './bg.js';
import { locomotive } from './locomotive.js';
import { shop } from './shop.js';
import { isotopeinit } from './isotopeinit.js';
import { album } from './album.js';
import gsap from 'gsap';

export const barbainit = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Transitions */
  // Basic page transition
  function pageTransition() {
    var tl = gsap.timeline();
    tl.to('.page-transition li', {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: 'bottom left',
      stagger: 0.2,
    });

    tl.to('.page-transition li', {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: 'bottom left',
      stagger: 0.1,
      delay: 0.1,
    });
  }

  // Basic content animation
  function contentAnimation() {
    var tl = gsap.timeline();
    if ($('.page-header').length) {
      tl.from('.page-header', {
        duration: 1,
        translateY: 50,
        opacity: 0,
        delay: 0.25,
      });
    }

    if ($('.sticky-header').length) {
      tl.from('.sticky-header', {
        duration: 1,
        translateY: 50,
        opacity: 0,
        delay: 0.25,
      });
    }

    if ($('.page-container').length) {
      tl.from('.page-container', {
        duration: 1,
        translateY: 50,
        opacity: 0,
        delay: 0,
      });
    }
  }

  // Video background transition
  function videoBGTransition() {
    var tl = gsap.timeline();
    tl.to('#home-container h1', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      delay: 0,
    });

    tl.to('#home-container h2', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      delay: 0,
    });

    tl.to('#canvas #home', {
      display: '',
      duration: 0.5,
      opacity: 0.25,
      delay: 0.1,
    });
  }

  // Reset background transition
  function resetBGTransition() {
    var tl = gsap.timeline();
    tl.to('#canvas #home', {
      display: '',
      duration: 0.5,
      opacity: 0.5,
      delay: 0.5,
    });
  }

  // Reset background transition
  function resetLesserBGTransition() {
    var tl = gsap.timeline();
    tl.to('#canvas #home', {
      display: '',
      duration: 0.5,
      opacity: 0.25,
      delay: 0.5,
    });
  }

  // Delay function for animations
  function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
      setTimeout(() => {
        done();
      }, n);
    });
  }

  /** Run the BarbaJS script */
  // Main after hooks
  barba.hooks.after(() => {
    // Init bgJS
    bg();

    // Init locomotiveJS
    locomotive();

    // Init shopJS
    shop();

    // Init isotopeJS
    isotopeinit();

    // Init albumJs
    album();
  });

  // Init BarbaJS
  barba.init({
    // Make sure the sync is true
    sync: true,

    // Set up the main transitions
    transitions: [{
      // The basic transition call
      name: 'default-transition',
      async leave() {
        const done = this.async();
        pageTransition();
        await delay(1250);
        done();
      },
      async enter() {
        contentAnimation();
      },
      async once() {
        contentAnimation();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
    }, {
      name: 'reset-background-transition',
      from: {
        namespace: [
          'shows',
          'blog',
        ],
      },
      async leave() {
        const done = this.async();
        resetBGTransition();
        pageTransition();
        await delay(1250);
        done();
      },
      async enter() {
        contentAnimation();
      },
      async once() {
        contentAnimation();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
    }, {
      name: 'reset-lesser-background-transition',
      to: {
        namespace: [
          'shows',
          'blog',
        ],
      },
      async leave() {
        const done = this.async();
        resetLesserBGTransition();
        pageTransition();
        await delay(1250);
        done();
      },
      async enter() {
        contentAnimation();
      },
      async once() {
        contentAnimation();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
    }, {
      // Transition from home to the other video background pages
      name: 'video-background-transition',
      from: {
        namespace: [
          'home',
        ],
      },
      to: {
        namespace: [
          'shows',
          'blog',
        ],
      },
      async leave() {
        const done = this.async();
        videoBGTransition();
        await delay(1250);
        done();
      },
      async enter() {
        contentAnimation();
      },
      async once() {
        contentAnimation();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
    }],

    // Set up the views
    views: [{
      // Home page view
      namespace: 'home',
      beforeEnter() {
        $('#canvas #home.canvas').addClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      // Show page view
      namespace: 'shows',
      beforeEnter() {
        $('#canvas #home.canvas').addClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        // Run Fancybox
        Fancybox.bind('[data-fancybox]', {
          closeButton: false,
        });
      },
    }, {
      // Music page view
      namespace: 'music',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      // Single album page view
      namespace: 'album',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        album();
      },
    }, {
      // Videos page view
      namespace: 'videos',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        // Run Fancybox
        Fancybox.bind('[data-fancybox="videos"]', {
          animated: true,
          id: 'videos',
          closeButton: true,
          placeFocusBack: false,
          Images: {
            initialSize: 'fit',
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
      // Photos page view
      namespace: 'photos',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
    }, {
      // Single gallery page view
      namespace: 'gallery',
      beforeEnter() {
        $('#canvas #home.canvas').removeClass('show');
        $('#canvas #about.canvas').removeClass('show');
      },
      afterEnter() {
        // Run Fancybox
        Fancybox.bind('[data-fancybox="gallery"]', {
          animated: true,
          id: 'photos',
          closeButton: false,
          Carousel: {
            Dots: {
              minCount: 2,
            },
          },
          Images: {
            initialSize: 'fit',
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