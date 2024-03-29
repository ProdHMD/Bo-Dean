import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';
import gsap from 'gsap';

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
    mobile: {
      smooth: true,
      scrollFromAnywhere: true,
      breakpoint: 0,
    },
    tablet: {
      smooth: true,
      scrollFromAnywhere: true,
      breakpoint: 0,
    },
  });

  /** Set up progress bar for scrolling */
  const progressBar = document.querySelector('.progress-bar');

  /** Init locomotive scroll object */
  scroll.on('scroll', (obj) => {
    // Progress scroll bar
    let widthToProgress = gsap.utils.mapRange(0, obj.limit.y, 0, 100);
    let howMuchScrolled = widthToProgress(obj.scroll.y);

    // Update the progress bar
    progressBar.style.width = `${howMuchScrolled}%`;
  });

  /** Update the scroll */
  scroll.update();

  /** Add resize observer */
  new ResizeObserver(() => scroll.update()).observe(el);
};

import.meta.webpackHot?.accept(locomotive);