// Import external dependencies with dynamic loading
import domReady from '@roots/sage/client/dom-ready';
import 'jquery';
import 'bootstrap';

/**
 * Application entrypoint
 */
domReady(async () => {
  // Function to hide routes on certain URLs
  const doesItContain = () => {
    const url = window.location.href;
    return ['/shop', '/product'].some(el => url.includes(el));
  };

  // Function to lazy-load modules only when needed
  const loadModule = async (module) => {
    switch (module) {
      case 'header': {
        const { header } = await import('./modules/header.js');
        header();
        break;
      }
      case 'music': {
        const { music } = await import('./modules/music.js');
        music();
        break;
      }
      case 'bg': {
        const { bg } = await import('./modules/bg.js');
        bg();
        break;
      }
      case 'locomotive': {
        const { locomotive } = await import('./modules/locomotive.js');
        locomotive();
        break;
      }
      case 'shop': {
        const { shop } = await import('./modules/shop.js');
        shop();
        break;
      }
      case 'fancybox': {
        const { fancyboxinit } = await import('./modules/fancyboxinit.js');
        fancyboxinit();
        break;
      }
      case 'isotope': {
        const { isotopeinit } = await import('./modules/isotopeinit.js');
        isotopeinit();
        break;
      }
      case 'barba': {
        const { barbainit } = await import('./modules/barbainit.js');
        barbainit();
        break;
      }
      default:
        console.warn('Unknown module: ', module);
    }
  };

  // Init critical modules immediately
  await loadModule('header');
  await loadModule('music');
  await loadModule('bg');

  // Lazy-load others based on page conditions
  if (!doesItContain()) {
    await loadModule('barba');
  }

  await loadModule('shop');  // Can be deferred based on page needs
  await loadModule('fancybox');
  await loadModule('isotope');
  await loadModule('locomotive');
});

/**
 * @see {@link https://webpack.js.org/api/hot-module-replacement/}
 */
if (import.meta.webpackHot) import.meta.webpackHot.accept(console.error);