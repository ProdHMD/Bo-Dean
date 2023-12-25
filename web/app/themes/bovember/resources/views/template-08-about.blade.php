{{--
  Template Name: 08 - About
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-08-about')
  @endwhile
@endsection
