{{--
  Template Name: 02 - Shows
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-02-shows')
  @endwhile
@endsection
