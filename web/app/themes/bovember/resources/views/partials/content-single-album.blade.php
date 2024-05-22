<?php require_once( ABSPATH . 'wp-admin/includes/media.php' ); ?>

<div class="sticky-header row">
  <div class="col-md-9 offset-md-1">
    <div class="cpt-nav">
      <a href="/music/">Back to Music</a>
    </div>
  </div>
</div>

<div class="row page-container" id="album-container">
  <div class="col-md-9 offset-md-1" id="main-content" data-scroll-section>
    <article @php(post_class('row h-entry'))>
      <div class="col-md-12 e-content">
        <div class="row" id="title">
          <div class="col-md-6 offset-md-3" id="album-thumbnail">
            <img src="<?php echo get_the_post_thumbnail_url($post->ID, 'large'); ?>" alt="Bo Dean" class="background-media img-fluid">  
          </div>

          <h1 class="text-center p-name">{!! $title !!}</h1>
          <div class="text-center description">@php(the_content())</div>
        </div>

        <div class="row" id="tracklist-container">
          <audio id="track-player"></audio>
          
          <?php if (have_rows('track')) : ?>
            <ol class="col-md-8 offset-md-2 list-unstyled" id="tracklist">
              <?php while (have_rows('track')) : the_row(); ?>
                <?php
                  /** CPT ACF repeater data */
                  $track_no = get_sub_field('track_no');
                  $track_name = get_sub_field('song_title');
                  $file = get_sub_field('file_name');
                  $file_path = get_attached_file($file['id']);
                  $file_url = $file['url'];
                  $file_info = wp_read_audio_metadata($file_path);
                  $file_length = $file_info['length_formatted'];
                ?>

                <li class="track">
                  <span class="details d-none" data-id="<?php echo $track_no; ?>" data-audio-link="<?php echo $file_url; ?>"><?php echo $track_name; ?></span>

                  <div class="track-no"><?php echo str_pad($track_no, 2, '0', STR_PAD_LEFT); ?></div>
                  <div class="track-name"><?php echo $track_name; ?></div>
                  <div class="track-length"><?php echo $file_length; ?></div>
                  <div class="track-play-pause">
                    <span class="play-btn"><x-fas-play /></span>
                    <span class="pause-btn"><x-fas-pause /></span>
                  </div>
                </li>
              <?php endwhile; ?>
            </ol>
          <?php endif; ?>

          <?php
            /** CPT ACF data */
            $download_link = get_field('download_link');
            $alternate_link = get_field('alternate_link');
            $itunes = get_field('itunes');
            $apple_music = get_field('apple_music');
            $spotify = get_field('spotify');
            $google_play = get_field('google_play');
            $pandora = get_field('pandora');
          ?>
          <div class="col-md-8 offset-md-2" id="link-container">
            <ul class="row list-unstyled" id="link-list">
              <?php if ($download_link) : ?>
                <li class="col-md-4 link-item" id="download">
                  <a href="<?php echo $download_link; ?>" target="_blank">
                    <div class="icon"><x-fas-cloud-download-alt /></div>
                    <div class="text">Download Now</div>
                  </a>
                </li>
              <?php endif; ?>

              <?php if ($alternate_link) : ?>
                <li class="col-md-4 link-item" id="alternate">
                  <a href="<?php echo $alternate_link; ?>" target="_blank">
                    <div class="icon"><x-fas-file-download /></div>
                    <div class="text">Mirror Download</div>
                  </a>
                </li>
              <?php endif; ?>

              <?php if ($itunes) : ?>
                <li class="col-md-4 link-item" id="itunes">
                  <a href="<?php echo $itunes; ?>" target="_blank">
                    <div class="icon"><x-fab-itunes-note /></div>
                    <div class="text">Download from iTunes</div>
                  </a>
                </li>
              <?php endif; ?>

              <?php if ($apple_music) : ?>
                <li class="col-md-4 link-item" id="apple">
                  <a href="<?php echo $apple_music; ?>" target="_blank">
                    <div class="icon"><x-fab-apple /></div>
                    <div class="text">Listen on Apple Music</div>
                  </a>
                </li>
              <?php endif; ?>

              <?php if ($spotify) : ?>
                <li class="col-md-4 link-item" id="spotify">
                  <a href="<?php echo $spotify; ?>" target="_blank">
                    <div class="icon"><x-fab-spotify /></div>
                    <div class="text">Listen on Spotify</div>
                  </a>
                </li>
              <?php endif; ?>

              <?php if ($google_play) : ?>
                <li class="col-md-4 link-item" id="google">
                  <a href="<?php echo $google_play; ?>" target="_blank">
                    <div class="icon"><x-fab-google-play /></div>
                    <div class="text">Download from Google Music</div>
                  </a>
                </li>
              <?php endif; ?>

              <?php if ($pandora) : ?>
                <li class="col-md-4 link-item" id="pandora">
                  <a href="<?php echo $pandora; ?>" target="_blank">
                    <div class="icon"><x-fab-lastfm /></div>
                    <div class="text">Listen on Last.FM</div>
                  </a>
                </li>
              <?php endif; ?>
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
</div>
