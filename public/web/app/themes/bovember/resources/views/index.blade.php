@extends('layouts.app')

@section('content')
  <div class="row page-container" id="blog-container" data-scroll-container>
    <div class="col-md-12" id="main-content" data-scroll-section>
      @include('partials.page-header')

      @if (! have_posts())
        <x-alert type="warning">
          {!! __('Sorry, no results were found.', 'sage') !!}
        </x-alert>

        {!! get_search_form(false) !!}
      @endif

      @while(have_posts()) @php(the_post())
        @includeFirst(['partials.content-' . get_post_type(), 'partials.content-07-blog'])
      @endwhile

      {!! get_the_posts_navigation() !!}
    </div>
  </div>
@endsection
