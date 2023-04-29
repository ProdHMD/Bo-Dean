export const header = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run ifURL function */
  ifURL();

  /** Pass current class to li if page loads  */
  function ifURL() {
    // Set variables
    var $url = window.location.pathname.replace(/\//g,'');
    var $li = $('#header .nav li');

    // Run each function
    $li.each(function () {
      if ($(this).children().attr('href') == $url) {
        $(this).addClass('current-menu-item current_page_item');
        $(this).siblings().removeClass('current-menu-item current_page_item');
      } 
    });

    // Run inArray checks
    if ($.inArray($('main').attr('id'), ['blog','blog-post']) >= 0) {
      $('#header .nav li.blog').addClass('current-menu-item current_page_item');
      $('#header .nav li.blog').siblings().removeClass('current-menu-item current_page_item');
    } else if ($.inArray($('main').attr('id'), ['music','album']) >= 0) {
        $('#header .nav li.music').addClass('current-menu-item current_page_item');
        $('#header .nav li.music').siblings().removeClass('current-menu-item current_page_item');
    } else if ($.inArray($('main').attr('id'), ['photos','gallery']) >= 0) {
        $('#header .nav li.photos').addClass('current-menu-item current_page_item');
        $('#header .nav li.photos').siblings().removeClass('current-menu-item current_page_item');
    } else if ($.inArray($('main').attr('id'), ['shop','cart','checkout','my-account','refund-returns']) >= 0) {
      $('#header .nav li.shop').addClass('current-menu-item current_page_item');
      $('#header .nav li.shop').siblings().removeClass('current-menu-item current_page_item');
    }

    navClick();
  }

  /** Pass current class to li on click */
  function navClick() {
    $('#header .nav li a').on('click', function() {
      $(this).parent('li').addClass('current-menu-item current_page_item');
      $(this).parent('li').siblings().removeClass('current-menu-item current_page_item');
    });

    $('#header .brand').on('click', function() {
      $(this).siblings('nav').children().children().children('li').removeClass('current-menu-item current_page_item');
    });
  }
};

import.meta.webpackHot?.accept(header);