{{--
  Template Name: 04 - Videos
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-04-videos')
  @endwhile
@endsection
