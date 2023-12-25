@if (has_nav_menu('primary_navigation'))
  <div class="nav-tertiary" aria-label="Music Player" id="music-player">
    <?php if (have_rows('track', 'option')) : $count = -1; ?>
      <ul id="playlist" class="d-none">
        <?php while (have_rows('track', 'option')) : the_row(); $count++; ?>
          <li class="track">
            <span class="details" data-id="<?php echo $count; ?>" data-audio-link="<?php the_sub_field('audio_file'); ?>">
              <?php the_sub_field('song_title'); ?>
            </span>
          </li>
        <?php endwhile; ?>
      </ul>
    <?php endif; ?>

    <audio id="player">
      <source src="" type="audio/mp3" />
    </audio>

    <div class="song-name"></div>
  </div>
@endif