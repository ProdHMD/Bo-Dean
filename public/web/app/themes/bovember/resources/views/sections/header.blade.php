<header class="banner" id="header">
  <a class="brand" href="{{ home_url('/') }}">
    {!! $siteName !!}
  </a>

  @if (has_nav_menu('primary_navigation'))
    <nav class="nav-primary" aria-label="{{ wp_get_nav_menu_name('primary_navigation') }}" id="main-navigation">
      {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
    </nav>
  @endif

  <nav class="nav-secondary" aria-label="Credits and Socials" id="bottom-navigation">
    <div class="credits">
      <span>Site by <a href="https://lljb3.com">ProdHMD</a>
    </div>
    <div class="socials">
      <ul class="social-list list-unstyled">
        <li class="social instagram"><a href="https://instagram.com/bovemberdean"><x-fab-instagram /></a></li>
        <li class="social facebook"><a href="https://facebook.com/bovemberdean"><x-fab-facebook /></a></li>
        <li class="social twitter"><a href="https://twitter.com/realbodean"><x-fab-twitter /></a></li>
        <li class="social youtube"><a href="https://youtube.com/bodeantv"><x-fab-youtube /></a></li>
      </ul>
    </div>
  </nav>

  <div class="nav-tertiary" aria-label="Music Player" id="music-player">
    <div class="equalizer"><x-fas-chart-simple /></div>
    <div class="song-name">Lavish</div>
  </div>
</header>
