import barba from '@barba/core';

export const barbainit = async (err) => {
  if (err) {
    console.error(err);
  }

  barba.init({
    
  });
};

import.meta.webpackHot?.accept(barbainit);