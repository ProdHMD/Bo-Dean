<div class="sticky-header row">
  <div class="col-md-9 offset-md-1">
    <div class="cpt-nav">
      <a href="/blog/">Back to Blog</a>
    </div>
  </div>
</div>

<div class="row page-container" id="blog-container" data-scroll-container>
  <div class="col-md-9 offset-md-1" id="main-content" data-scroll-section>
    <article @php(post_class('h-entry'))>
      <header>
        @include('partials.entry-meta')

        <h1 class="p-name">
          {!! $title !!}
        </h1>
      </header>

      <div class="e-content">
        @php(the_content())
      </div>

      <div class="post-thumbnail">
        <?php echo get_the_post_thumbnail($post->ID, 'full', array('class'=>"img-fluid attachment-post-thumbnail center-block")); ?>
      </div>

      <footer>
        <?php $related_posts = get_related_posts($post->ID, 2); ?>
        <?php if ($related_posts->have_posts()) : ?>
          <ul class="list-unstyled row" id="related-posts">
            <h2 class="section-title">Related Fro-Posts</h2>
            <?php while ($related_posts->have_posts()) : $related_posts->the_post(); ?>
              <?php $id = get_the_id(); ?>
              <li class="related-item col-md-6">
                <div class="title">
                  <h3><a href="<?php the_permalink(); ?>"><?php echo get_the_title(); ?></a></h3>
                </div>
                <div class="date">
                  <time class="dt-published" datetime="{{ get_post_time('c', true) }}">
                    {{ get_the_date('m.d.Y') }}
                  </time>
                </div>
                <div class="link"><a href="<?php the_permalink(); ?>">Read More</a></div>
              </li>
            <?php endwhile; wp_reset_postdata(); ?>
          </ul>
        <?php endif; ?>
      </footer>
    </article>
  </div>
</div>
