import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';
import gsap from 'gsap';
import getThumbnail from 'youtube-thumbnail-grabber';

export const video = async (err) => {
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

  /** Set the global looped variables to be called back */
  let pageToken;
  let idNum;

  /** Init locomotive scroll object */
  scroll.on('scroll', (obj) => {
    // Progress scroll bar
    let widthToProgress = gsap.utils.mapRange(0, obj.limit.y, 0, 100);
    let howMuchScrolled = widthToProgress(obj.scroll.y);

  // Append videos at end of the list on videos page
    if ($('main').hasClass('videos')) {
      if (pageToken === 'EAAajQFQVDpDQ01pRURsR00wVXdPRVpEUkRaR1FVSkJOelVvQVVqaWhzZlQxc1NFQTFBQldrUWlRMmxLVVZSR1NYbGhWM1J6VTBad1ZrMXJUa3ROTW14Q1ZtczFTRTVzVms1VGFsSjVWVlpXVm1SSVdtRlRlbFYzUldkelNUWm1NMjl5WjFsUk1FeHVWbGhCSWc') {
        if (howMuchScrolled === 100) {
          return;
        }
      } else {
        if (howMuchScrolled >= 100) {
          videoLoadMore(function(pageToken, idNum) {
            pageToken;
            idNum;
          });
        }
      }
    }
  });

  /** Update the scroll */
  scroll.update();

  /** Add resize observer */
  new ResizeObserver(() => scroll.update()).observe(el);

  /** Set up load more YouTube videos on scroll end */
  function videoLoadMore(callback) {
    // Set up the page token if it exists, else push it to blank
    if (pageToken) {
      pageToken;
    } else {
      pageToken = 'EAAajQFQVDpDQVVpRURVMlFqUTBSalpFTVRBMU5UZERRellvQVVqaWhzZlQxc1NFQTFBQldrUWlRMmxLVVZSR1NYbGhWM1J6VTBad1ZrMXJUa3ROTW14Q1ZtczFTRTVzVms1VGFsSjVWVlpXVm1SSVdtRlRlbFYzUldkelNUWm1NMjl5WjFsUk1FeHVWbGhCSWc';
    }

    if (pageToken === 'EAAajQFQVDpDQ01pRURsR00wVXdPRVpEUkRaR1FVSkJOelVvQVVqaWhzZlQxc1NFQTFBQldrUWlRMmxLVVZSR1NYbGhWM1J6VTBad1ZrMXJUa3ROTW14Q1ZtczFTRTVzVms1VGFsSjVWVlpXVm1SSVdtRlRlbFYzUldkelNUWm1NMjl5WjFsUk1FeHVWbGhCSWc') {
      return;
    }

    // Set the other variables for the ajax url param
    var htmlString = '';
    var apiKey = 'AIzaSyBXYQCuuGAAwi2cJ0SIEv22O5pAHokFK1g';
    var playlistId = 'PLR2iklHZU2CJ3iAVNG6UMJ4rQUUtvZK50';
    var maxResults = 3;
    var tl = gsap.timeline();

    // Get the ajax call
    $.ajax({
      'async': false,
      'url': 'https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet,status,contentDetails&maxResults='+maxResults+'&playlistId='+playlistId+'&key='+apiKey+'&pageToken='+pageToken,
      'dataType': 'json',
      'success': function(data) {
        // Set the initial number of items for id starter value
        if (idNum) {
          idNum;
        } else {
          idNum = 5;
        }

        // Run the YouTube item loop
        $.each(data.items, function(i, item) {
          // Set variables and constants
          const incrNum = idNum++;
          var videoId = item['snippet']['resourceId']['videoId'];
          var title = item['snippet']['title'];
          var pub = item['contentDetails']['videoPublishedAt'];
          const year = new Date(pub);
          var videoURL = 'https://www.youtube.com/watch?v='+videoId;
          var thumbnail;

          // Set thumbnail value
          if (getThumbnail(videoURL, 'max')) {
            thumbnail = getThumbnail(videoURL, 'max');
          } else if (getThumbnail(videoURL, 'mq')) {
            thumbnail = getThumbnail(videoURL, 'mq');
          } else {
            thumbnail = getThumbnail(videoURL, 'hq');
          }

          // Output the html string
          if (item['status']['privacyStatus'] === 'private') {
            htmlString += '';
          } else {
            htmlString += '<div class="youtube-item text-center" id="youtube-item-id'+incrNum+'"><a href="'+videoURL+'" class="thumbnail" data-fancybox="videos" id="item'+incrNum+'"><img src="'+thumbnail+'" class="img-fluid"></a><h2 class="title">'+title+'</h2><h3 class="year">'+year.getFullYear()+'</h3></div>';
          }
        });

        // Append the next five videos found and reset the string to empty
        $('#video-gallery-container').append(htmlString);
        tl.to('#videos-container #main-content .youtube-item', {
          duration: 0.25,
          translateY: 0,
          opacity: 1,
          stagger: 0.125,
          delay: 0,
        });
        htmlString = '';

        // Set the page token to the next page token from the API call
        if (data['prevPageToken'] === 'EAEajQFQVDpDQ01pRURsR00wVXdPRVpEUkRaR1FVSkJOelVvQVVqaWhzZlQxc1NFQTFBQVdrUWlRMmxLVVZSR1NYbGhWM1J6VTBad1ZrMXJUa3ROTW14Q1ZtczFTRTVzVms1VGFsSjVWVlpXVm1SSVdtRlRlbFYzUldkelNUWm1NMjl5WjFsUk1FeHVWbGhCSWc' && data['nextPageToken'] === undefined) {
          return;
        } else {
          pageToken = data['nextPageToken'];
        }
        idNum;
      },
    });

    // Put the important call back here for passing the page token variable
    callback(pageToken, idNum);
  }
};

import.meta.webpackHot?.accept(video);