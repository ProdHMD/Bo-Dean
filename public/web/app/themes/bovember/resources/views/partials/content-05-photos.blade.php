<?php
    global $post;
    $post_slug = $post->post_name;

    /** CPT args and query */
    $args = array(
        'post_type' => 'gallery',
        'posts_per_page' => -1,
        'meta_key' => 'album_date',
        'orderby' => 'meta_value',
        'order' => 'DESC',
    );
    $query = new WP_Query($args);

    /** CPT taxonomy */
    $album_types = get_terms(
        array(
            'taxonomy' => 'location',
            'hide_empty' => false,
        )
    );
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container">
    <div class="col-md-9 offset-md-1" id="main-content" data-scroll-section>
        <h1 class="d-none">{!! $title !!}</h1>

        <div class="container-fluid" id="galleries-container">
            <?php if ($query->have_posts()) : ?>
                <ul class="row list-unstyled" id="gallery-list">
                    <?php while ($query->have_posts()) : $query->the_post(); ?>
                        <?php
                            /** CPT ACF data */
                            $id = get_the_id();
                            $title = get_the_title($id);
                            $permalink = get_permalink($id);
                            $thumbnail = get_the_post_thumbnail($id, 'large', array('class'=>"img-fluid attachment-post-thumbnail center-block"));
                            $location = get_the_terms($id, 'location');
                            $date = get_field('album_date');
                        ?>

                        <li class="col-xl-6 gallery">
                            <div class="gallery-thumbnail">
                                <a href="<?php echo $permalink; ?>">
                                    <?php echo $thumbnail; ?>
                                </a>
                            </div>

                            <div class="gallery-info">
                                <span class="date"><?php echo $date; ?></span>
                                <h2 class="title"><a href="<?php echo $permalink; ?>"><?php echo $title; ?></a></h2>
                                <span class="location"><?php echo $location[0]->name; ?></span>
                            </div>
                        </li>
                    <?php endwhile; wp_reset_postdata(); ?>
                </ul>
            <?php endif; ?>
        </div>
    </div>
</div>