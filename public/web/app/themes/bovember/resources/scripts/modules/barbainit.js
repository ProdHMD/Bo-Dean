import barba from '@barba/core';

export const barbainit = async (err) => {
  if (err) {
    console.error(err);
  }

  barba.init({
    views: [{
      namespace: 'home',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'shows',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'music',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'videos',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'photos',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'shop',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'single-product',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'blog',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'blog-post',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'about',
      beforeEnter() {

      },
      afterEnter() {

      },
    }, {
      namespace: 'contact',
      beforeEnter() {

      },
      afterEnter() {

      },
    }],
  });
};

import.meta.webpackHot?.accept(barbainit);