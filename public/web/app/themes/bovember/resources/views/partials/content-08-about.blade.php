<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
    <div class="col-md-8" id="main-content" data-scroll-section>
        @php(the_content())
    </div>
</div>
