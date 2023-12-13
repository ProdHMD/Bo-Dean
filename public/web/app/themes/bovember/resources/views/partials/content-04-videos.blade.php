<?php
    global $post;
    $post_slug = $post->post_name;

    /** API config */
    $api_key = 'AIzaSyBXYQCuuGAAwi2cJ0SIEv22O5pAHokFK1g';
    $channel_id = 'UCtlIU9DLLzmvti8z-KYfC8w';
    $video_id = 'IVqEx8sl5Sg';
    $playlist_id = 'PL110D4DA154B62487';
    $max_results = 7;

    /** Get videos from channel */
    $api_data = @file_get_contents('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&s=true&maxResults=' . $max_results . '&playlistId=' . $playlist_id . '&key=' . $api_key . '');
    $api_error = 'No videos found.';
    if ($api_data) {
        $video_list = json_decode($api_data);
    } else {
        echo 'Invalid API key or channel ID.';
    }
?>

<div class="row page-container" id="<?php echo $post_slug; ?>-container">
    <div class="col-md-9 offset-md-1" id="main-content">
        <h1 class="d-none">{!! $title !!}</h1>

        <div class="container-fluid" id="video-gallery-container" data-scroll-section>
            <?php $i = 0; $j = 0; if (!empty($video_list->items)) : ?>
                <?php foreach ($video_list->items as $item) : ?>
                    <?php if ($item->snippet->resourceId->videoId && $item->snippet->title !== 'Private video') : ?>
                        <?php
                            $thumbnail_webp = 'https://i.ytimg.com/vi_webp/' . $item->snippet->resourceId->videoId . '/maxresdefault.webp';
                            $thumbnail_jpg = 'https://i.ytimg.com/vi/' . $item->snippet->resourceId->videoId . '/maxresdefault.jpg';
                            $thumbnail_hq = 'https://i.ytimg.com/vi/' . $item->snippet->resourceId->videoId . '/hqdefault.jpg';

                            /** Use get_headers() function */
                            $webp_exists = @get_headers($thumbnail_webp);
                            $maxjpg_exists = @get_headers($thumbnail_jpg);

                            /** Use condition to check the existence of URL */
                            if ($webp_exists && strpos( $webp_exists[0], '200')) {
                                $thumbnail = $thumbnail_webp;
                            } else if ($maxjpg_exists && strpos( $maxjpg_exists[0], '200')) {
                                $thumbnail = $thumbnail_jpg;
                            } else {
                                $thumbnail = $thumbnail_hq;
                            }
                        ?>
                        <div class="youtube-item text-center" id="youtube-item-id<?php echo $i++; ?>">
                            <a href="https://www.youtube.com/watch?v=<?php echo $item->snippet->resourceId->videoId; ?>" class="thumbnail" data-fancybox="videos" id="item<?php echo $j++; ?>">
                                <img src="<?php echo $thumbnail; ?>" alt="<?php echo $item->snippet->title; ?>" class="img-fluid">
                            </a>
                            <h2 class="title"><?php echo $item->snippet->title; ?></h2>
                            <h3 class="year"><?php echo date('Y', strtotime($item->snippet->publishedAt)); ?></h3>
                        </div>
                    <?php endif; ?>
                <?php endforeach; ?>
            <?php else : ?>
                <p class="error"><?php echo $api_error; ?></p>
            <?php endif; ?>
        </div>
    </div>
</div>