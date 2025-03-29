import LocomotiveScroll from 'locomotive-scroll';
import { ResizeObserver } from '@juggle/resize-observer';
import gsap from 'gsap';
import getThumbnail from 'youtube-thumbnail-grabber';

export const video = (err) => {
  if (err) console.error(err);

  /** Initialize Locomotive Scroll */
  const el = document.querySelector('[data-scroll-container]');
  const scroll = new LocomotiveScroll({
    el: el,
    smooth: true,
    scrollFromAnywhere: true,
    mobile: { smooth: true, scrollFromAnywhere: true, breakpoint: 0 },
    tablet: { smooth: true, scrollFromAnywhere: true, breakpoint: 0 },
  });

  let pageToken = null; // Ensure this updates properly
  let idNum = 1; // Track video numbering
  let loading = false; // Prevent duplicate API calls

  /** Synchronous function to check if URL exists */
  function urlExists(url) {
    const xhr = new XMLHttpRequest();
    xhr.open('HEAD', url, false);  // false makes the request synchronous
    
    try {
      xhr.send();
      // If status is 404 or not 200 (OK), return false, but do not log
      if (xhr.status === 404) {
        return false;
      }
      return xhr.status === 200; // Return true if status is 200 (OK)
    } catch (error) {
      // If an error occurs (network failure), return false, but do not log
      return false;
    }
  }

  /** Function to Load YouTube Videos */
  function videoLoadMore(isInitialLoad = false) {
    if (loading) return;
    if (pageToken === null && !isInitialLoad) return; // Stop if no more pages

    loading = true;

    let apiKey = 'AIzaSyBXYQCuuGAAwi2cJ0SIEv22O5pAHokFK1g';
    let playlistId = 'PLR2iklHZU2CJ3iAVNG6UMJ4rQUUtvZK50';
    let maxResults = 5;

    //console.log(`Fetching videos with pageToken: ${pageToken}`);

    $.ajax({
      url: `https://youtube.googleapis.com/youtube/v3/playlistItems`,
      data: {
        part: 'snippet,status,contentDetails',
        maxResults: maxResults,
        playlistId: playlistId,
        key: apiKey,
        pageToken: pageToken || '', // Ensures first request works correctly
      },
      dataType: 'json',
      success: function (data) {
        if (!data.items || data.items.length === 0) {
          //console.log("No more videos to load.");
          loading = false;
          return;
        }

        let htmlString = '';

        // Iterate through each video item and add it to the gallery
        $.each(data.items, function (i, item) {
          if (item.status.privacyStatus === 'private') return;

          let videoId = item.snippet.resourceId.videoId;
          let title = item.snippet.title;
          let pub = item.contentDetails.videoPublishedAt;
          let year = new Date(pub).getFullYear();
          let videoURL = `https://www.youtube.com/watch?v=${videoId}`;

          // Try to get the highest quality thumbnail (max > hq > mq)
          let thumbnailUrl = getThumbnail(videoURL, 'max');
          if (!urlExists(thumbnailUrl)) {
            thumbnailUrl = getThumbnail(videoURL, 'hq');
            if (!urlExists(thumbnailUrl)) {
              thumbnailUrl = getThumbnail(videoURL, 'mq');
            }
          }

          htmlString += `
            <div class="youtube-item text-center" id="youtube-item-id${idNum++}">
              <a href="${videoURL}" class="thumbnail" data-fancybox="videos">
                <img src="${thumbnailUrl}" class="img-fluid">
              </a>
              <h2 class="title">${title}</h2>
              <h3 class="year">${year}</h3>
            </div>`;
        });

        // Append all videos after collection
        $('#video-gallery-container').append(htmlString);

        // Trigger GSAP animation after all items have been added
        gsap.to('.youtube-item', { duration: 0.25, translateY: 0, opacity: 1, stagger: 0.125 });

        // Update the pageToken
        pageToken = data.nextPageToken || null; // Update next page token
        //console.log(`Next pageToken updated to: ${pageToken}`);

        loading = false;
      },
      error: function (error) {
        console.error("Error fetching videos: ", error);
        loading = false;
      },
    });
  }

  /** Load first 5 videos on page load */
  videoLoadMore(true);

  /** Infinite scroll logic */
  scroll.on('scroll', (obj) => {
    let widthToProgress = gsap.utils.mapRange(0, obj.limit.y, 0, 100);
    let howMuchScrolled = widthToProgress(obj.scroll.y);

    if ($('main').hasClass('videos') && howMuchScrolled >= 100) {
      videoLoadMore();
    }
  });

  /** Ensure scroll updates */
  scroll.update();
  new ResizeObserver(() => scroll.update()).observe(el);
};

import.meta.webpackHot?.accept(video);