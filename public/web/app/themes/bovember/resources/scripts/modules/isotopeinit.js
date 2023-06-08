import jqueryBridget from 'jquery-bridget';
import Isotope from 'isotope-layout';
// make Isotope a jQuery plugin
jqueryBridget( 'isotope', Isotope, $ );

export const isotopeinit = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run function by specific pages */
  if ($.inArray($('main').attr('id'), ['music']) >= 0) {
    music();
  }

  /** The music page fancybox function */
  function music() {
    // Run Isotope
    $('#album-row.isotope').isotope({
      // options
      itemSelector: '.isotope-item',
      layoutMode: 'masonry',
    });

    // Filter items on button click
    $('.album-types').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$('#album-row.isotope').isotope({ filter: filterValue });
		});
  }
};

import.meta.webpackHot?.accept(isotopeinit);