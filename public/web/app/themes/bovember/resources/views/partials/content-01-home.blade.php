<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>">
    <div class="col-md-12" id="main-content">
        @php(the_content())
    </div>
</div>

<div class="canvas" id="<?php echo $post_slug; ?>-slideshow">
    <video src="@asset('images/videos/bodean-home-video01.mp4')" class="background-media" playsinline muted autoplay loop preload="none"></video>
</div>
