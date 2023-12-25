{{--
  Template Name: 05 - Photos
--}}

@extends('layouts.app')

@section('content')
  @while(have_posts()) @php(the_post())
    @include('partials.content-05-photos')
  @endwhile
@endsection
