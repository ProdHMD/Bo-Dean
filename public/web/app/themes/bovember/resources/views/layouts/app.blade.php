<?php
    global $post;
    $post_id = $post->ID;
    if (is_home()) {
      $post_slug = 'blog';
    } else if (is_single()) {
      $post_slug = 'blog-post';
    } else {
      $post_slug = $post->post_name; 
    }
?>

<a class="sr-only sr-only-focusable visually-hidden" href="#main">
  {{ __('Skip to content') }}
</a>

<main id="<?php echo $post_slug; ?>" class="main" data-barba="container" data-barba-namespace="<?php echo $post_slug; ?>">
  @include('sections.header')

  <div class="container-fluid" id="container">
    <div class="row" id="wrapper">
      <div class="col-md-12" id="content">
        @yield('content')
      </div>
    </div>
  </div>
</main>

@include('sections.background')
