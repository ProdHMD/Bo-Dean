import domReady from '@roots/sage/client/dom-ready';

// Import Bootstrap
import 'bootstrap';
//import barba from '@barba/core';
//import gsap from 'gsap';

/**
 * Application entrypoint
 */
domReady(async () => {
  // ...
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
import.meta.webpackHot?.accept(console.error);
