// Import external dependencies
import domReady from '@roots/sage/client/dom-ready';
import 'jquery';
import 'bootstrap';

// Import custom modules
import { header } from './modules/header.js';
import { bg } from './modules/bg.js';
import { locomotive } from './modules/locomotive.js';
//import { barbainit } from './modules/barbainit.js';

/**
 * Application entrypoint
 */
domReady(async () => {
  // Init headerJS
  header();

  // Init bgJS
  bg();

  // Init locomotiveJS
  locomotive();

  // Init barbaInitJS
  //barbainit();
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);
