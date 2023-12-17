<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container">
    <div class="col-xl-8" id="main-content" data-scroll-section>
        @php(the_content())
    </div>
</div>
