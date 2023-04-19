// Import external dependencies
import domReady from '@roots/sage/client/dom-ready';
import 'jquery';

// Import Bootstrap
import 'bootstrap';

// Import kool dependencies
import LocomotiveScroll from 'locomotive-scroll';

/**
 * Application entrypoint
 */
domReady(async () => {
  // Import bgJS if .canvas exists
  if (document.querySelector('.canvas')) {
    const {bg} = await import('@scripts/modules/bg');
    bg();
  }

  // Init locomotive scroll
  if ($('#container').innerHeight() < $('#wrapper').innerHeight()) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
    scroll;
  }
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
