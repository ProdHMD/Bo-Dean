<div class="row page-container" id="gallery-container" data-scroll-container>
  <div class="col-md-9 offset-md-1" id="main-content" data-scroll-section>
    <article @php(post_class('row h-entry'))>
      <header class="col-md-12">
        <div class="gallery-nav">
          <a href="/photos/">Back to Photos</a>
        </div>
      </header>

      <?php $images = get_field('photos'); ?>
      <div class="col-md-12 e-content">
        <?php if ($images) : ?>
          <ul class="row list-unstyled gallery-container">
            <?php foreach ($images as $image) : ?>
              <li class="col-md-6 photo">
                <div class="photo-container">
                  <a href="<?php echo esc_url($image['url']); ?>">
                    <img src="<?php echo esc_url($image['sizes']['large']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" class="img-fluid" />
                  </a>
                </div>
              </li>
            <?php endforeach; ?>
          </ul>
        <?php endif; ?>
      </div>
    </article>
  </div>
</div>
