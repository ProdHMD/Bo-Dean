import Plyr from 'plyr';

export const music = async (err) => {
  if (err) {
    console.error(err);
  }

  /** Run player function */
  player();

  /** Set up player function  */
  function player() {
    // Set controls
    const controls = `
      <div class="plyr__controls">
        <div class="equalizer plyr__control" aria-label="Play" data-plyr="play">
          <span class="bars"></span>
        </div>
      </div>
    `;

    // Set variables
    const player = new Plyr('#player', {
      // Set the options
      autoplay: false,
      //loop: true,
      volume: 0.75,
      controls,
      displayDuration: false,
      markers: {
        enabled: false,
      },
    });

    // First track variables
    var audio = $('#playlist .track:first-child .details').attr('data-audio-link');
    var name = $('#playlist .track:first-child .details').text();

    // Set the source
    player.source = {
      type: 'audio',
      title: name,
      sources: [
        {
          src: audio,
          type: 'audio/mp3',
        },
      ],
    };

    // Set the track name
    $('.song-name').text(name);

    // Set button
    $('#music-player .equalizer').addClass('stop');
    $('#playlist .track:first-child').addClass('current');

    // Set up play button
    $('#music-player .equalizer').on('click', function() {
      $(this).toggleClass(function() {
        if ($(this).hasClass('play')) {
          player.pause();
          $(this).removeClass('play');
          return 'stop';
        } else {
          player.play();
          $(this).removeClass('stop');
          return 'play';
        }
      });
    });

    // Set up playlist variables
    var current = 1;
    var playlist = $('#playlist');
    var tracks = playlist.find('.track .details');
    var len = tracks.length - 1;
    var link;
    var source = $('#player source');

    // Set up playlist
    player.on('ended', function() {
      current++

      if (current == len) {
        current = 0;
        link = playlist.find('span')[0];
      } else {
        link = playlist.find('span')[current];
      }

      run($(link), source);
    });

    // Run function
    function run(link, audio) {
      var par = link.parent();
      par.addClass('current').siblings().removeClass('current');
      audio.src = link.attr('data-audio-link');
      player.play();
    }
  }
};

import.meta.webpackHot?.accept(music);