// Import external dependencies
import domReady from '@roots/sage/client/dom-ready';
import 'jquery';

// Import Bootstrap
import 'bootstrap';

/**
 * Application entrypoint
 */
domReady(async () => {
  // Import bgJS if canvas classed element exists
  if (document.querySelector('.canvas')) {
    const {bg} = await import('@scripts/modules/bg');
    bg();
  }
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
