import gsap from 'gsap';

export const header = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Function to hide routes on certain URLs */
  const doesItContain = () => {
    const url = window.location.href;
    return ['/shop', '/product'].some(el => url.includes(el));
  };

  /** Set up preloading animations */
  var tl = gsap.timeline();
  if (!doesItContain()) {
    window.addEventListener('load', function() {
      var mobileDelay;
      if (window.innerHeight <= 1200) {
        mobileDelay = -0.5;
      } else {
        mobileDelay = 0;
      }

      tl.to('#preloader li', {
        duration: 0.5,
        scaleY: 0,
        transformOrigin: 'bottom left',
        stagger: 0.25,
        delay: 0.1,
      });

      tl.to('#header #music-player', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: mobileDelay,
      });

      tl.to('#header #desktop-menu #bottom-navigation .socials .social-list .social', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: -0.125,
        stagger: -0.025,
      });

      tl.to('#header #desktop-menu #bottom-navigation .credits', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: -0.125,
      });

      tl.to('#header #desktop-menu #main-navigation .nav .menu-item', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: -0.125,
        stagger: -0.025,
      });

      tl.to('#header #music-player', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: -0.125,
      });

      tl.to('#header #mobile-menu .navbar-toggler', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: -0.125,
      });

      tl.to('#header .brand', {
        duration: 0.25,
        translateY: 0,
        opacity: 1,
        ease: 'power3.out',
        delay: -0.25,
      });
    });
  }

  /** Run ifURL function */
  ifURL();

  /** Pass current class to li if page loads  */
  function ifURL() {
    // Set variables
    var $url = window.location.pathname.replace(/\//g,'');
    var $li = $('#header .nav li');

    // Set it up for mobile devices
    function mobileSize() {
      if ($(window).innerWidth() < 1200) {
        $li = $('#header #mobile-menu .nav li');
      }
    }
    mobileSize();
    $(window).on('resize', function() {
      mobileSize();
    });

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

    $('#header #mobile-menu .brand').on('click', function() {
      $(this).parent().siblings().children().children().children().children('.nav-primary').children().children().children('li').removeClass('current-menu-item current_page_item');
    });
  }

  /** Add animation to toggler action */
  if (!doesItContain()) {
    $('#header #mobile-menu .nav li a').on('click', function() {
      tl.to('#header #mobile-menu #main-navigation .nav .menu-item', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0,
        stagger: 0.15,
      });

      tl.to('#header #mobile-menu #bottom-navigation .credits', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0,
      });

      tl.to('#header #mobile-menu #bottom-navigation .socials .social-list .social', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0,
        stagger: 0.15,
      });

      setTimeout(() => {
        $('#header #mobile-menu #panel-navbar-collapse').removeClass('show');
        $('#header #mobile-menu .navbar-toggler').addClass('collapsed').attr('aria-expanded', false);
      }, 0);
    });

    $('#header #mobile-menu .brand').on('click', function() {
      tl.to('#header #desktop-menu #main-navigation .nav .menu-item', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0,
        stagger: 0.15,
      });

      tl.to('#header #mobile-menu #bottom-navigation .credits', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0,
      });

      tl.to('#header #mobile-menu #bottom-navigation .socials .social-list .social', {
        duration: 0.25,
        translateY: 50,
        opacity: 0,
        ease: 'power3.out',
        delay: 0,
        stagger: 0.15,
      });

      setTimeout(() => {
        $('#header #mobile-menu #panel-navbar-collapse').removeClass('show');
        $('#header #mobile-menu .navbar-toggler').addClass('collapsed').attr('aria-expanded', false);
      }, 0);
    });

    $('#header #mobile-menu .navbar-toggler').on('click', function() {
      if ($('#header #mobile-menu #panel-navbar-collapse').hasClass('show')) {
        tl.to('#header #mobile-menu #main-navigation .nav .menu-item', {
          duration: 0.25,
          translateY: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: 0,
          stagger: 0.15,
        });
  
        tl.to('#header #mobile-menu #bottom-navigation .credits', {
          duration: 0.25,
          translateY: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: 0,
        });
  
        tl.to('#header #mobile-menu #bottom-navigation .socials .social-list .social', {
          duration: 0.25,
          translateY: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: 0,
          stagger: 0.15,
        });
      } else {
        tl.to('#header #mobile-menu #main-navigation .nav .menu-item', {
          duration: 0.25,
          translateY: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: 0,
          stagger: 0.15,
        });
  
        tl.to('#header #mobile-menu #bottom-navigation .credits', {
          duration: 0.25,
          translateY: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: 0,
        });
  
        tl.to('#header #mobile-menu #bottom-navigation .socials .social-list .social', {
          duration: 0.25,
          translateY: 0,
          opacity: 1,
          ease: 'power3.out',
          delay: 0,
          stagger: 0.15,
        });
      }
    })
  }
};

import.meta.webpackHot?.accept(header);