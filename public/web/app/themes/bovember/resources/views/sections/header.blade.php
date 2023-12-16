<header class="banner" id="header">
  @if (is_woocommerce() || is_cart() || is_checkout() || is_account_page())
    @if (has_nav_menu('shop_navigation'))
      <a class="brand shop-brand" href="{{ get_permalink(wc_get_page_id('shop')) }}">
        {!! $siteName !!}
      </a>

      <nav class="nav-primary shop-navigation" aria-label="{{ wp_get_nav_menu_name('shop_navigation') }}" id="main-navigation">
        {!! wp_nav_menu(['theme_location' => 'shop_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      </nav>
    @endif
  @else
    @if (has_nav_menu('primary_navigation'))
      <a class="brand" href="{{ home_url('/') }}">
        {!! $siteName !!}
      </a>

      <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}" id="main-navigation">
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      </nav>
    @endif
  @endif

  <nav class="nav-secondary" aria-label="Credits and Socials" id="bottom-navigation">
    <div class="credits">
      <span>Site by <a href="https://lljb3.com">ProdHMD</a>
    </div>
    <div class="socials">
      <ul class="social-list list-unstyled">
        <li class="social instagram"><a href="https://instagram.com/bovemberdean"><x-fab-instagram /><span class="d-none">Instagram</span></a></li>
        <li class="social facebook"><a href="https://facebook.com/bovemberdean"><x-fab-facebook /><span class="d-none">Facebook</span></a></li>
        <li class="social twitter"><a href="https://twitter.com/realbodean"><x-fab-twitter /><span class="d-none">Twitter</span></a></li>
        <li class="social youtube"><a href="https://youtube.com/bodeantv"><x-fab-youtube /><span class="d-none">YouTube</span></a></li>
      </ul>
    </div>
  </nav>

  @if (is_woocommerce() || is_cart() || is_checkout() || is_account_page())
    <!-- Nothing should be loaded here. -->
  @else
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
  @endif
</header>
