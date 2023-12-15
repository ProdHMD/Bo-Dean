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

    // Set up player
    const player = new Plyr('#player', {
      // Set the options
      debug: false,
      autoplay: false,
      autopause: false,
      clickToPlay: false,
      muted: true,
      volume: 0,
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

    // Set up playlist
    var current = 0;
    var playlist = $('#playlist');
    var tracks = playlist.children('.track');
    var length = tracks.length;
    var link;

    // If playback ends, go to the next song
    player.on('ended', function() {
      current++;
      if (current == length) {
        current = 0;
        link = playlist.find('.track .details')[0];
      } else {
        link = playlist.find('.track .details')[current];
      }
      console.log(current+' and '+length);
      run($(link), player);
    });

    // The run playlist function
    function run(link, audioPlayer) {
      audioPlayer.src = link.attr('data-audio-link');
      audioPlayer.name = link.text();
      var parent = link.parent();
      parent.addClass('current').siblings().removeClass('current');
      $('#music-player .equalizer').addClass('stop').removeClass('play');
      $('.song-name').text();
      player.source = {
        type: 'audio',
        title: audioPlayer.name,
        sources: [
          {
            src: audioPlayer.src,
            type: 'audio/mp3',
          },
        ],
      };
      $('#music-player .equalizer').removeClass('stop').addClass('play');
      $('.song-name').text(audioPlayer.name);
      player.play();

      // Reinit play button
      $('#music-player .equalizer').on('click', function() {
        $(this).toggleClass(function() {
          if ($(this).hasClass('play')) {
            player.pause();
            $(this).removeClass('play');
            return 'stop';
          } else {
            player.volume = 0.75;
            player.play();
            $(this).removeClass('stop');
            return 'play';
          }
        });
      });
    }

    // Set up play button
    $('#music-player .equalizer').on('click', function() {
      $(this).toggleClass(function() {
        if ($(this).hasClass('play')) {
          player.pause();
          $(this).removeClass('play');
          return 'stop';
        } else {
          player.volume = 0.75;
          player.play();
          $(this).removeClass('stop');
          return 'play';
        }
      });
    });

    // Pause on video or album click
    $('.youtube-item > a, #tracklist > .track').on('click', function() {
      player.pause();
      $('#music-player .equalizer').addClass('stop');
      $('#music-player .equalizer').removeClass('play');
    });
  }
};

import.meta.webpackHot?.accept(music);