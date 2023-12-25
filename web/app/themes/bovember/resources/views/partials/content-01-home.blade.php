<?php
    global $post;
    $post_slug = $post->post_name;
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container">
    <div class="col-md-12" id="main-content">
        @php(the_content())
    </div>
</div>
