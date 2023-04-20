<div class="canvas-container" id="canvas">
    <div class="canvas" id="home">
        <video src="@asset('images/videos/bodean-home-video01.mp4')" class="background-media" playsinline muted autoplay loop preload="none"></video>
    </div>

    <div class="canvas" id="about">
        <img src="<?php echo get_the_post_thumbnail_url($post_id, 'full'); ?>" alt="Bo Dean" class="background-media">
    </div>
</div>