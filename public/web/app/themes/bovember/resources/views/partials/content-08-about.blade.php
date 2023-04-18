<?php
    global $post;
    $post_slug = $post->post_name;
    $post_id = $post->ID;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>">
    <div class="col-md-8" id="main-content">
        @php(the_content())
    </div>
</div>

<div class="canvas" id="<?php echo $post_slug; ?>-slideshow">
    <img src="<?php echo get_the_post_thumbnail_url($post_id, 'full'); ?>" alt="Bo Dean" class="background-media img-fluid">
</div>
