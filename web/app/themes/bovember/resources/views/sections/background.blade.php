<div class="canvas-container" id="canvas">
    <div class="canvas<?php if (is_page('home') || is_page('shows') || is_page('blog')) echo ' show'; ?>" id="home">
        <video src="@asset('images/videos/bodean-home-video03.mp4')" class="background-media" playsinline muted autoplay loop preload="none"></video>
    </div>

    <div class="canvas<?php if (is_page('about')) echo ' show'; ?>" id="about">
        <?php $about_page = url_to_postid('/about'); ?>
        <img src="<?php echo get_the_post_thumbnail_url($about_page, 'full'); ?>" alt="Bo Dean" class="background-media">
    </div>
</div>