<div class="row page-container" id="blog-container">
  <div class="col-md-12" id="main-content">
    <article @php(post_class('h-entry'))>
      <header>
        <div class="blog-nav">
          <a href="/blog/">Back to Blog</a>
        </div>

        @include('partials.entry-meta')

        <h1 class="p-name">
          {!! $title !!}
        </h1>
      </header>

      <div class="e-content">
        @php(the_content())
      </div>

      <footer>
        {!! wp_link_pages(['echo' => 0, 'before' => '<nav class="page-nav"><p>' . __('Pages:', 'sage'), 'after' => '</p></nav>']) !!}
      </footer>
    </article>
  </div>
</div>
