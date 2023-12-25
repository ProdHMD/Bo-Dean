{{--
  Template Name: 03 - Music
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-03-music')
  @endwhile
@endsection
