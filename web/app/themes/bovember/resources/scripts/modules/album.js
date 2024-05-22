import Plyr from 'plyr';

export const album = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run album playlist function */
  if ($.inArray($('main').attr('id'), ['album']) >= 0) {
    albumPlayer();
  }

  /** Set up album playlist function */
  function albumPlayer() {
    // Run the new album specific player
    const trackPlayer = new Plyr('#track-player', {
      // Set the options
      debug: false,
      autoplay: false,
      autopause: false,
      clickToPlay: false,
      muted: true,
      volume: 0,
      controls: false,
      displayDuration: false,
      markers: {
        enabled: false,
      },
    });

    // Set up variables to be used for later
    var audio;
    var playlist;
    var tracks;
    var current;
    var link;
    var len;
    var par;
    
    // Initialize the album player
    init();

    // Set up the init function
    function init() {
      // Set up variables
      current = 0;
      audio = $('#track-player');
      playlist = $('#tracklist');
      tracks = playlist.find('.track .details');
      len = tracks.length;
      audio[0].volume = 0.75;

      // Set up the click functionality
      playlist.find('.track').on('click',function(e) {
        e.preventDefault();
        link = $(this).children('.details');
        current = link.parent().index();

        if ($(this).hasClass('active')) {
          if (trackPlayer.playing) {
            audio[0].pause();
            link.siblings('.track-play-pause').removeClass('play').addClass('stop');
          } else if (trackPlayer.paused) {
            audio[0].play();
            link.siblings('.track-play-pause').addClass('play').removeClass('stop');
          }
        } else {
          run(link, audio[0]);
        }
      });

      // Check if track ends and go to the next on the list
      audio[0].addEventListener('ended',function() {
        current++;
        if (current == len){
          current = 0;
          link = playlist.find('.details')[0];
        } else {
          link = playlist.find('.details')[current];    
        }
        run($(link), audio[0]);
      });
    }

    // Set up the run playlist function
    function run(link, player) {
      player.src = link.attr('data-audio-link');
      par = link.parent();
      par.addClass('active').siblings().removeClass('active');
      par.children('.track-play-pause').addClass('play').removeClass('stop');
      par.siblings().children('.track-play-pause').removeClass('play').addClass('stop');
      audio[0].load();
      audio[0].play();
    }

    // Pause on clicks away from page
    $('.cpt-nav > a, .nav-item > a, #music-player .equalizer').on('click', function() {
      trackPlayer.stop();
    });
  }
};

import.meta.webpackHot?.accept(album);