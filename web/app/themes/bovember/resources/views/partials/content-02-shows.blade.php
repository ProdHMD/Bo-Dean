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

<div class="row page-container" id="<?php echo $post_slug; ?>-container">
    <div class="col-md-12" id="main-content" data-scroll-section>
        <h1 class="d-none">{!! $title !!}</h1>
        
        <?php $i = 0; $j = 0; if ($query->have_posts()) : while ($query->have_posts()) : $query->the_post(); ?>
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
                    <a href="#" data-fancybox data-src="#tour-id-<?php echo $i++; ?>">
                        <?php if ($location) : ?>
                            <?php if ($location['name'] && $place_name) :  ?>
                                <?php echo $place_name; ?>
                            <?php elseif ($location['name']) : ?>
                                <?php echo $location['name']; ?>
                            <?php else : ?>
                                <?php echo $place_name; ?>
                            <?php endif; ?>
                        <?php endif; ?>
                    </a>
                </h2>

                <span class="date-time"><?php echo ($date_time) ? ($date_time) : ''; ?></span>
            </div>

            <div class="show-details" id="tour-id-<?php echo $j++; ?>" style="display:none;">
                <div class="header row">
                    <div class="brand col-md-6">
                        <h2>Bo Dean</h2>
                    </div>
                    <div class="go-back col-md-6">
                        <a href="#" class="close" data-fancybox-close>Back to Shows</a>
                    </div>
                </div>

                <span class="location-name">
                    <?php if ($location) : ?>
                        <?php if ($location['name'] && $place_name) :  ?>
                            <?php echo $place_name; ?>
                        <?php elseif ($location['name']) : ?>
                            <?php echo $location['name']; ?>
                        <?php else : ?>
                            <?php echo $place_name; ?>
                        <?php endif; ?>
                    <?php endif; ?>
                </span>

                <h2 class="show-name"><?php the_title(); ?></h2>

                <ul class="list-unstyled" id="ticket-providers">
                    <div class="list-title">Get tickets:</div>
                    <li class="provider"><a href="<?php echo ($ticket_url) ? $ticket_url : ''; ?>" target="_blank">Facebook Events</a></li>
                </ul>
            </div>
        <?php endwhile; wp_reset_postdata(); else : ?>
            <div class="show-container text-center" id="no-shows">
                <div class="no-shows-inner d-flex flex-wrap flex-column justify-content-center">
                    <strong class="location-name fs-1">No Shows Right Now</strong>
                    <p class="city-name">Come back soon.</p>
                </div>
            </div>
        <?php endif; ?>
    </div>
</div>
