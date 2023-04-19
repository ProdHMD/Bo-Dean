<?php
    global $post;
    $post_slug = $post->post_name;
    $post_id = $post->ID;
?>

<a class="sr-only sr-only-focusable visually-hidden" href="#main">
  {{ __('Skip to content') }}
</a>

@include('sections.header')

<main id="<?php echo $post_slug; ?>" class="main" data-barba="container" data-barba-namespace="<?php echo $post_slug; ?>">
  <div class="container-fluid" id="container">
    <div class="row" id="wrapper">
      <div class="col-md-12" id="content">
        @yield('content')
      </div>
    </div>
  </div>
</main>

@hasSection('sidebar')
  <aside class="sidebar">
    @yield('sidebar')
  </aside>
@endif
