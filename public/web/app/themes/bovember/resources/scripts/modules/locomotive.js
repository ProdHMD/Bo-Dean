import LocomotiveScroll from 'locomotive-scroll';

export const locomotive = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run locomotive scroll script */
  if ($('#container').innerHeight() < $('#wrapper').innerHeight()) {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
    });
    scroll;
  }

  console.log('Scroll is loaded.');
};

import.meta.webpackHot?.accept(locomotive);