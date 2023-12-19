<?php
    global $post;
    $post_slug = $post->post_name;

    /** CPT args and query */
    $args = array(
        'post_type' => 'album',
        'posts_per_page' => -1,
        'meta_key' => 'release_date',
        'orderby' => 'meta_value',
        'order' => 'DESC',
    );
    $query = new WP_Query($args);

    /** CPT taxonomy */
    $album_types = get_terms(
        array(
            'taxonomy' => 'album_type',
            'hide_empty' => false,
        )
    );
?>
<div class="row page-header" id="music-header">
    <div class="col-md-9 offset-md-1" id="isotope-content">
        <?php if (!empty($album_types)) : ?>
            <div class="container-fluid" id="album-types-container">
                <ul class="album-types list-unstyled">
                    <li class="album-type">
                        <button class="type-link" data-filter="*">All</button>
                    </li>
                    <?php foreach ($album_types as $album_type) : ?>
                        <li class="album-type">
                            <button class="type-link" data-filter="<?php echo '.' . $album_type->slug ?>">
                                <?php echo $album_type->name; ?>
                            </button>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php endif; ?>
    </div>
</div>

<div class="row page-container" id="<?php echo $post_slug; ?>-container">
    <div class="col-md-9 offset-md-1" id="main-content" data-scroll-section>
        <h1 class="d-none">{!! $title !!}</h1>
        
        <div class="container-fluid" id="albums-container">
            <?php if ($query->have_posts()) : ?>
                <ol class="row list-unstyled isotope" id="album-row">
                    <?php while ($query->have_posts()) : $query->the_post();?>
                        <?php
                            /** CPT ACF data */
                            $id = get_the_id();
                            $permalink = get_permalink($id);
                            $thumbnail = get_the_post_thumbnail($id, 'large', array('class'=>"img-fluid attachment-post-thumbnail center-block"));
                            $type = get_the_terms($id, 'album_type');
                        ?>

                        <li class="isotope-item transition <?php echo $type[0]->slug; ?> col-xl-6 col-lg-6 col-md-6" data-category="transition">
                            <div class="album-thumbnail">
                                <a href="<?php echo $permalink; ?>">
                                    <?php echo $thumbnail; ?>
                                </a>
                            </div>
                        </li>
                    <?php endwhile; wp_reset_postdata(); ?>
                </ol>
            <?php endif; ?>
        </div>
    </div>
</div>
