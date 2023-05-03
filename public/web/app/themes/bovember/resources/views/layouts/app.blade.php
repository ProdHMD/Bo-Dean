<?php
    global $post;
    if ($post) {
      $post_id = $post->ID;

      if (is_home()) {
        $post_slug = 'blog';
      } else if (is_singular('album')) {
        $post_slug = 'album';
      } else if (is_singular('gallery')) {
        $post_slug = 'gallery';
      } else if (is_shop() || is_product_category() || is_product_tag()) {
        $post_slug = 'shop';
      } else if (is_product()) {
        $post_slug = 'single-product';
      } else if (is_cart()) {
        $post_slug = 'cart';
      } else if (is_checkout()) {
        $post_slug = 'checkout';
      } else if (is_account_page()) {
        $post_slug = 'my-account';
      } else if (is_single()) {
        $post_slug = 'blog-post';
      } else {
        $post_slug = $post->post_name; 
      }
    } else {
      $post_id = '';
      $post_slug = '';
    }
?>

<a class="sr-only sr-only-focusable visually-hidden" href="#main">
  {{ __('Skip to content') }}
</a>

@include('sections.header')

<main id="<?php echo $post_slug; ?>" <?php body_class('main'); ?> data-barba="container" data-barba-namespace="<?php echo $post_slug; ?>">
  <div class="container-fluid" id="container">
    <div class="row" id="wrapper">
      <div class="col-md-12" id="content">
        <?php if (is_cart() || is_checkout() || is_account_page()) : ?>
          <div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
            <div class="col-md-9 offset-md-1" id="main-content" data-scroll-section>
              <h1 class="page-title"><?php the_title(); ?></h1>
        <?php endif; ?>
        
        @yield('content')

        <?php if (is_cart() || is_checkout() || is_account_page()) : ?>
            </div>
          </div>
        <?php endif; ?>
      </div>
    </div>
  </div>
</main>

<?php if (is_page('home') || is_page('shows') || is_page('about') || is_home()) : ?>
  @include('sections.background')
<?php endif; ?>
