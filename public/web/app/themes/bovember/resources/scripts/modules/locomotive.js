import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';

export const locomotive = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run locomotive scroll script */
  const el = document.querySelector('[data-scroll-container]');
  const scroll = new LocomotiveScroll({
    el: el,
    smooth: true,
    scrollFromAnywhere: true,
  });
  new ResizeObserver(() => scroll.update()).observe(el);
};

import.meta.webpackHot?.accept(locomotive);