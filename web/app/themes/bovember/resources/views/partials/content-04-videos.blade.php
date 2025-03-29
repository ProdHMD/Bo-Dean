<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container">
    <div class="col-md-9 offset-md-1" id="main-content">
        <h1 class="d-none">{!! $title !!}</h1>

        <div class="container-fluid" id="video-gallery-container" data-scroll-section>
        </div>
    </div>
</div>