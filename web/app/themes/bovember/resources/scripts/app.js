// Import external dependencies
import domReady from '@roots/sage/client/dom-ready';
import 'jquery';
import 'bootstrap';

// Import custom modules
import { header } from './modules/header.js';
import { music } from './modules/music.js';
import { bg } from './modules/bg.js';
import { locomotive } from './modules/locomotive.js';
import { shop } from './modules/shop.js';
import { fancyboxinit } from './modules/fancyboxinit.js';
import { isotopeinit } from './modules/isotopeinit.js';
import { barbainit } from './modules/barbainit.js';

/**
 * Application entrypoint
 */
domReady(async () => {
  // Function to hide routes on certain URLs
  const doesItContain = () => {
    const url = window.location.href;
    return ['/shop', '/product'].some(el => url.includes(el));
  };

  // Init headerJS
  header();

  // Init musicJS
  music();

  // Init bgJS
  bg();

  // Init locomotiveJS
  locomotive();

  // Init shopJS
  shop();

  // Init fancyboxInitJS
  fancyboxinit();

  // Init isotopeJS
  isotopeinit();

  // Init barbaInitJS
  if (!doesItContain()) {
    barbainit();
  }
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
