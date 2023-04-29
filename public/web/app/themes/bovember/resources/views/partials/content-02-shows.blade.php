<?php
    global $post;
    $post_slug = $post->post_name;

    /** CPT args and query */
    $args = array(
        'post_type' => 'shows',
        'posts_per_page' => -1,
    );
    $query = new WP_Query($args);
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container" data-scroll-container>
    <div class="col-md-12" id="main-content" data-scroll-section>
        <h1 class="d-none">{!! $title !!}</h1>
        
        <?php if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
            <?php
                /** CPT ACF data */
                $date_time = get_field('date_time');
                $location = get_field('venue_name');
                $place_name = get_field('place_name');
                $city_state = get_field('city_state');
                $ticket_url = get_field('ticket_url');
            ?>

            <div class="show-container text-center">
                <span class="city-name">
                    <?php if ($location) : ?>
                        <?php if ($location['city'] && $location['state_short']) :  ?>
                            <?php echo $location['city'] . ', ' . $location['state_short']; ?>
                        <?php else : ?>
                            <?php echo $city_state; ?>
                        <?php endif; ?>
                    <?php endif; ?>
                </span>

                <h2 class="location-name">
                    <?php echo ($ticket_url) ? '<a href="' . ($ticket_url) . '" target="_blank">' : ''; ?>
                        <?php if ($location) : ?>
                            <?php if ($location['name'] && $place_name) :  ?>
                                <?php echo $place_name; ?>
                            <?php elseif ($location['name']) : ?>
                                <?php echo $location['name']; ?>
                            <?php else : ?>
                                <?php echo $place_name; ?>
                            <?php endif; ?>
                        <?php endif; ?>
                    <?php echo ($ticket_url) ? '</a>' : ''; ?>
                </h2>

                <span class="date-time"><?php echo ($date_time) ? ($date_time) : ''; ?></span>
            </div>
        <?php endwhile; wp_reset_postdata(); endif; ?>
    </div>
</div>
