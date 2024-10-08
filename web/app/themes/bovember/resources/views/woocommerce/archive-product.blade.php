{{--
The Template for displaying product archives, including the main shop page which is a post type archive

This template can be overridden by copying it to yourtheme/woocommerce/archive-product.php.

HOWEVER, on occasion WooCommerce will need to update template files and you
(the theme developer) will need to copy the new files to your theme to
maintain compatibility. We try to do this as little as possible, but it does
happen. When this occurs the version of the template file will be bumped and
the readme will list any important changes.

@see https://docs.woocommerce.com/document/template-structure/
@package WooCommerce/Templates
@version 3.4.0
--}}

@extends('layouts.app')

@section('content')
<div class="row page-container" id="shop-container">
  <div class="col-md-12" id="main-content" data-scroll-section>
    <h1 class="d-none">{!! woocommerce_page_title(false) !!}</h1>

    @if (woocommerce_product_loop())
      @php
        woocommerce_product_loop_start();
      @endphp

      @if (wc_get_loop_prop('total'))
        @while (have_posts())
          @php
            the_post();
            do_action('woocommerce_shop_loop');
            wc_get_template_part('content', 'product');
          @endphp
        @endwhile
      @endif

      @php
        woocommerce_product_loop_end();
      @endphp
    @else
      @php
        do_action('woocommerce_no_products_found')
      @endphp
    @endif
  </div>
</div>
@endsection
