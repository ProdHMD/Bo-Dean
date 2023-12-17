<header class="banner <?php if (is_woocommerce() || is_cart() || is_checkout() || is_account_page()) echo 'shop-nav'; ?>" id="header">
  <div class="d-xl-block d-none" id="desktop-menu">
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
  </div>

  <div class="d-xl-none d-lg-block" id="mobile-menu">
    <div class="navbar navbar-expand-xl">
      @if (is_woocommerce() || is_cart() || is_checkout() || is_account_page())
        @if (has_nav_menu('shop_navigation'))
          <a class="brand navbar-brand shop-brand" href="{{ get_permalink(wc_get_page_id('shop')) }}">
            {!! $siteName !!}
          </a>
        @endif
      @else
        @if (has_nav_menu('primary_navigation'))
          <a class="brand navbar-brand" href="{{ home_url('/') }}">
            {!! $siteName !!}
          </a>
        @endif
      @endif

      <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panel-navbar-collapse" aria-controls="panel-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="sr-only sr-only-focusable visually-hidden">Menu</span>
        <span class="icon-bar top-bar"></span>
        <span class="icon-bar mid-bar"></span>
        <span class="icon-bar bot-bar"></span>
      </button>
    </div>

    <div class="navbar-collapse collapse" id="panel-navbar-collapse">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 offset-lg-4">
            @if (is_woocommerce() || is_cart() || is_checkout() || is_account_page())
              @if (has_nav_menu('shop_navigation'))
                <nav class="nav-primary shop-navigation" aria-label="{{ wp_get_nav_menu_name('shop_navigation') }}" id="main-navigation">
                  {!! wp_nav_menu(['theme_location' => 'shop_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
                </nav>
              @endif
            @else
              @if (has_nav_menu('primary_navigation'))
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
          </div>
        </div>
      </div>
    </div>
  </div>

  @if (is_woocommerce() || is_cart() || is_checkout() || is_account_page())
    <!-- Nothing should be loaded here. -->
  @else
    @include('sections.footer')
  @endif
</header>