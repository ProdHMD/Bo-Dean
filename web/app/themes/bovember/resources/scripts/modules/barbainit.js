import barba from '@barba/core';
import { Fancybox } from '@fancyapps/ui';
import { bg } from './bg.js';
import { locomotive } from './locomotive.js';
import { shop } from './shop.js';
import { isotopeinit } from './isotopeinit.js';
import { album } from './album.js';
import { video } from './video.js';
import gsap from 'gsap';

export const barbainit = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Transitions */
  var tl = gsap.timeline();
  // Basic page transitions
  function fromCurrentPage() {
    tl.to('.page-transition li', {
      duration: 0.5,
      scaleY: 1,
      transformOrigin: "bottom left",
      stagger: 0.25,
    });
  }

  function toCurrentPage() {
    tl.to('.page-transition li', {
      duration: 0.5,
      scaleY: 0,
      transformOrigin: 'bottom left',
      stagger: 0.25,
      delay: 0.25,
    });
  }

  // Current content transitions
  function fromCurrentContent() {
    if ($('.page-header').length) {
      tl.to('.page-header', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        delay: 0,
      });
    }

    if ($('.sticky-header').length) {
      tl.to('.sticky-header', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        delay: 0,
      });
    }

    if ($('main').hasClass('home')) {
      fromHomePage();
    } 
    
    if ($('main').hasClass('shows')) {
      fromShowsPage();
    } 
    
    if ($('main').hasClass('music')) {
      fromMusicPage();
    } 
    
    if ($('main').hasClass('album')) {
      fromAlbumPage();
    } 
    
    if ($('main').hasClass('videos')) {
      fromVideoPage();
    } 
    
    if ($('main').hasClass('photos')) {
      fromPhotosPage();
    } 
    
    if ($('main').hasClass('gallery')) {
      fromGalleryPage();
    } 
    
    if ($('main').hasClass('blog')) {
      fromBlogPage();
    } 
    
    if ($('main').hasClass('single-post')) {
      fromSinglePostPage();
    } 
    
    if ($('main').hasClass('about')) {
      fromAboutPage();
    } 
    
    if ($('main').hasClass('contact')) {
      fromContactPage();
    }

    if ($('.page-container').length) {
      tl.to('.page-container', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        delay: 0,
      });
    }
  }

  function toCurrentContent() {
    if ($('.page-header').length) {
      tl.to('.page-header', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        delay: 0,
      });
    }

    if ($('.sticky-header').length) {
      tl.to('.sticky-header', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        delay: 0,
      });
    }

    if ($('.page-container').length) {
      tl.to('.page-container', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        delay: 0,
      });
    }

    if ($('main').hasClass('home')) {
      toHomePage();
    } 
    
    if ($('main').hasClass('shows')) {
      toShowsPage();
    } 
    
    if ($('main').hasClass('music')) {
      toMusicPage();
    } 
    
    if ($('main').hasClass('single-album')) {
      toAlbumPage();
    } 
    
    if ($('main').hasClass('videos')) {
      toVideoPage();
    } 
    
    if ($('main').hasClass('photos')) {
      toPhotosPage();
    } 
    
    if ($('main').hasClass('single-gallery')) {
      toGalleryPage();
    } 
    
    if ($('main').hasClass('blog')) {
      toBlogPage();
    } 
    
    if ($('main').hasClass('single-post')) {
      toSinglePostPage();
    } 
    
    if ($('main').hasClass('about')) {
      toAboutPage();
    } 
    
    if ($('main').hasClass('contact')) {
      toContactPage();
    }
  }

  // Transition for canvases
  function homeToOtherCanvas() {
    tl.to('#canvas #about', {
      duration: 0.25,
      opacity: 0,
      delay: 0,
    });

    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0.25,
      delay: 0,
    });
  }

  function otherCanvasToHome() {
    tl.to('#canvas #about', {
      duration: 0.25,
      opacity: 0,
      delay: 0,
    });
    
    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0.5,
      delay: 0,
    });
  }

  function homeToAboutCanvas() {
    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0,
      delay: 0,
    });

    tl.to('#canvas #about', {
      duration: 0.25,
      opacity: 0.5,
      delay: 0,
    });
  }

  function aboutToHomeCanvas() {
    tl.to('#canvas #about', {
      duration: 0.25,
      opacity: 0,
      delay: 0,
    });

    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0.5,
      delay: 0,
    });
  }

  function otherHomeToAboutCanvas() {
    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0,
      delay: 0,
    });

    tl.to('#canvas #about', {
      duration: 0.25,
      opacity: 0.5,
      delay: 0,
    });
  }

  function aboutToOtherHomeCanvas() {
    tl.to('#canvas #about', {
      duration: 0.25,
      opacity: 0,
      delay: 0,
    });

    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0.25,
      delay: 0,
    });
  }

  function stayOnOtherHome() {
    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0.25,
      delay: 0,
    });
  }

  function hideAllCanvases() {
    tl.to('#canvas > *', {
      duration: 0.25,
      opacity: 0,
      delay: 0,
    });
  }

  function turnHomeCanvasBackOn() {
    tl.to('#canvas #home', {
      duration: 0.25,
      opacity: 0.5,
      delay: 0,
    });
  }

  function turnAboutCanvasBackOn() {
    tl.to('#canvas #about', {
      duration: 0.25,
      opacity: 0.5,
      delay: 0,
    });
  }

  // Home page transitions
  function fromHomePage() {
    tl.to('#home-container #main-content > *', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toHomePage() {
    tl.to('#home-container #main-content > *', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
    });
  }

  // Shows page transitions
  function fromShowsPage() {
    tl.to('#shows-container #main-content > .show-container', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toShowsPage() {
    tl.to('#shows-container #main-content > .show-container', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
    });
  }

  // Music page transitions
  function fromMusicPage() {
    tl.to('#music-container #main-content .album-thumbnail', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toMusicPage() {
    tl.to('#music-container #main-content .album-thumbnail', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
    });
  }

  // Album page transitions
  function fromAlbumPage() {
    tl.to('#album-container #main-content #title', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });

    tl.to('#album-container #main-content .track > *', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });

    if ($('#album-container #main-content #link-list').length) {
      tl.to('#album-container #main-content #link-list .link-item', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        stagger: 0.125,
        delay: 0,
      });
    }
  }

  function toAlbumPage() {
    tl.to('#album-container #main-content #title', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
    });

    tl.to('#album-container #main-content .track > *', {
      duration: 0.0625,
      translateY: 0,
      opacity: 1,
      stagger: 0.03125,
      delay: 0,
    });

    if ($('#album-container #main-content #link-list').length) {
      tl.to('#album-container #main-content #link-list .link-item', {
        duration: 0.0625,
        translateY: 0,
        opacity: 1,
        stagger: 0.03125,
        delay: 0,
      });
    }
  }

  // Video page transitions
  function fromVideoPage() {
    tl.to('#videos-container #main-content .youtube-item', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toVideoPage() {
    tl.from('#videos-container #main-content .youtube-item', {
      translateY: 50,
      opacity: 0,
      delay: 0,
    })
    .to('#videos-container #main-content .youtube-item', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
      onComplete: () => {
        document.querySelectorAll('#videos-container #main-content .youtube-item')
          .forEach(el => el.style.removeProperty('opacity')); // Let CSS handle hover now
      },
    });
  }

  // Photos page transitions
  function fromPhotosPage() {
    tl.to('#photos-container #main-content .gallery', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toPhotosPage() {
    tl.from('#photos-container #main-content .gallery', {
      translateY: 50,
      opacity: 0,
      delay: 0,
    })
    .to('#photos-container #main-content .gallery', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
      onComplete: () => {
        document.querySelectorAll('#photos-container #main-content .gallery')
          .forEach(el => el.style.removeProperty('opacity')); // Let CSS handle hover now
      },
    });
  }

  // Gallery page transitions
  function fromGalleryPage() {
    tl.to('#gallery-container #main-content .photo', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toGalleryPage() {
    tl.from('#gallery-container #main-content .photo', {
      translateY: 50,
      opacity: 0,
      delay: 0,
    })
    .to('#gallery-container #main-content .photo', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
      onComplete: () => {
        document.querySelectorAll('#gallery-container #main-content .photo')
          .forEach(el => el.style.removeProperty('opacity')); // Let CSS handle hover now
      },
    });
  }

  // Blog page transitions
  function fromBlogPage() {
    tl.to('#blog-container #main-content .post', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toBlogPage() {
    tl.to('#blog-container #main-content .post', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
    });
  }

  // Single post transitions
  function fromSinglePostPage() {
    tl.to('#blog-container #main-content .post > *', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toSinglePostPage() {
    tl.to('#blog-container #main-content .post > *', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
    });
  }

  // About page transitions
  function fromAboutPage() {
    tl.to('#about-container #main-content > *', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toAboutPage() {
    tl.to('#about-container #main-content > *', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
    });
  }

  // Contact page transitions
  function fromContactPage() {
    tl.to('#contact #content > *', {
      duration: 0.25,
      translateY: 50,
      opacity: 0,
      stagger: 0.125,
      delay: 0,
    });
  }

  function toContactPage() {
    tl.to('#contact #content > *', {
      duration: 0.25,
      translateY: 0,
      opacity: 1,
      stagger: 0.125,
      delay: 0,
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

    // Turn on and off debug mode
    debug: false,

    // Prevent barba from running on wpadminbar
    prevent: ({ el }) => (el.classList && el.classList.contains('ab-item')),

    // Set up the main transitions
    transitions: [{
      // The basic transition call
      name: 'default-transition',
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Home to other home canvas pages
      name: 'home-to-other-home-transition',
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
        fromCurrentContent();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        homeToOtherCanvas();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        homeToOtherCanvas();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Other home to home canvas pages
      name: 'other-home-to-home-transition',
      from: {
        namespace: [
          'shows',
          'blog',
        ],
      },
      to: {
        namespace: [
          'home',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        otherCanvasToHome();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        otherCanvasToHome();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Stay on other home canvas
      name: 'stay-on-other-home-transition',
      from: {
        namespace: [
          'shows',
          'blog',
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
        fromCurrentContent();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        stayOnOtherHome();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        stayOnOtherHome();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Go to other home
      name: 'go-to-other-home-transition',
      to: {
        namespace: [
          'shows',
          'blog',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        stayOnOtherHome();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        stayOnOtherHome();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // About to home canvas page
      name: 'about-to-home-transition',
      from: {
        namespace: [
          'about',
        ],
      },
      to: {
        namespace: [
          'home',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        aboutToHomeCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        aboutToHomeCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // About to other home canvas page
      name: 'about-to-other-home-transition',
      from: {
        namespace: [
          'about',
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
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        aboutToOtherHomeCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        aboutToOtherHomeCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Home to about canvas page
      name: 'home-to-about-transition',
      from: {
        namespace: [
          'home',
        ],
      },
      to: {
        namespace: [
          'about',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        homeToAboutCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        homeToAboutCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Other home to about canvas page
      name: 'other-home-to-about-transition',
      from: {
        namespace: [
          'shows',
          'blog',
        ],
      },
      to: {
        namespace: [
          'about',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        otherHomeToAboutCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        otherHomeToAboutCanvas();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Turn off all canvases
      name: 'turn-off-canvases-transition',
      from: {
        namespace: [
          'home',
          'shows',
          'blog',
          'about',
        ],
      },
      to: {
        namespace: [
          'music',
          'videos',
          'photos',
          'gallery',
          'single-post',
          'contact',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        hideAllCanvases();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        hideAllCanvases();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Turn on home canvas
      name: 'turn-on-home-transition',
      from: {
        namespace: [
          'music',
          'videos',
          'photos',
          'gallery',
          'single-post',
          'contact',
        ],
      },
      to: {
        namespace: [
          'home',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        turnHomeCanvasBackOn();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        turnHomeCanvasBackOn();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Turn on home canvas
      name: 'turn-on-about-transition',
      from: {
        namespace: [
          'music',
          'videos',
          'photos',
          'single-post',
          'contact',
        ],
      },
      to: {
        namespace: [
          'about',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        fromCurrentPage();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        turnAboutCanvasBackOn();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        turnAboutCanvasBackOn();
        toCurrentPage();
        await delay(250);
        toCurrentContent();
        done();
      },
    }, {
      // Stay black and turn off page transition
      name: 'turn-off-page-transition',
      from: {
        namespace: [
          'music',
          'album',
          'videos',
          'photos',
          'gallery',
          'single-post',
          'contact',
        ],
      },
      to: {
        namespace: [
          'music',
          'album',
          'videos',
          'photos',
          'gallery',
          'single-post',
          'contact',
        ],
      },
      async leave() {
        const done = this.async();
        fromCurrentContent();
        await delay(500);
        done();
      },
      beforeEnter: ({ next }) => {
        const matches = next.html.match(/<main.+?class='([^""]*)'/i);
        document.body.setAttribute('class', (matches && matches.at(1)) ?? '');
      },
      async enter() {
        const done = this.async();
        await delay(500);
        hideAllCanvases();
        await delay(250);
        toCurrentContent();
        done();
      },
      async once() {
        const done = this.async();
        await delay(500);
        hideAllCanvases();
        await delay(250);
        toCurrentContent();
        done();
      },
    }],

    // Set up the views
    views: [{
      // Home page view
      namespace: 'home',
    }, {
      // Show page view
      namespace: 'shows',
      afterEnter() {
        // Run Fancybox
        Fancybox.bind('[data-fancybox]', {
          closeButton: false,
          placeFocusBack: false,
        });
      },
    }, {
      // Music page view
      namespace: 'music',
    }, {
      // Single album page view
      namespace: 'album',
      afterEnter() {
        album();
      },
    }, {
      // Videos page view
      namespace: 'videos',
      async beforeEnter() {
        video();
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
            zoom: true,
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
      async beforeEnter() {
        await delay(250);
        gsap.set('#photos-container #main-content .gallery', {
          opacity: 0,
          translateY: 50,
        });
      },
    }, {
      // Single gallery page view
      namespace: 'gallery',
      async beforeEnter() {
        await delay(250);
        gsap.set('#gallery-container #main-content .photo', {
          opacity: 0,
          translateY: 50,
        });
      },
      afterEnter() {
        // Run Fancybox
        Fancybox.bind('[data-fancybox="gallery"]', {
          animated: true,
          id: 'photos',
          closeButton: false,
          placeFocusBack: false,
          Carousel: {
            Dots: {
              minCount: 2,
            },
          },
          Images: {
            initialSize: 'fit',
            zoom: false,
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
    }, {
      namespace: 'single-product',
    }, {
      namespace: 'blog',
    }, {
      namespace: 'blog-post',
    }, {
      namespace: 'about',
    }, {
      namespace: 'contact',
    }],
  });
};

import.meta.webpackHot?.accept(barbainit);