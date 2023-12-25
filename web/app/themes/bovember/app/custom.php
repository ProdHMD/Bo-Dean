<?php

/**
 * Custom Nav Menu Class For Page ID
 * 
 * @return void
 */

function add_slug_class_to_menu_item($output) {
	$ps = get_option('permalink_structure'); 
    if(!empty($ps)) {
		$idstr = preg_match_all('/<li id="menu-item-(\d+)/', $output, $matches);
		foreach($matches[1] as $mid) {
			$id = get_post_meta($mid, '_menu_item_object_id', true);
			$slug = basename(get_permalink($id));
			$output = preg_replace('/menu-item-'.$mid.'">/', 'menu-item-'.$mid.' '.$slug.'">', $output, 1);
		}
	}
	return $output;
}
add_filter('wp_nav_menu', 'add_slug_class_to_menu_item');

/**
 * Setting Google Developers API
 * 
 * @return void
 */
function my_acf_init() {
    acf_update_setting('google_api_key', 'AIzaSyB_enXfVfVwec5Up6rnvhucQUeT4fvf62c');
}
add_action('acf/init', 'my_acf_init');

/**
 * Set new image sizes
 * 
 * @return void
 */
add_image_size('gallery-thumb', 500, 350, true);

/**
 * Set up WooCommerce support
 * 
 * @return void
 */
add_theme_support('wc-product-gallery-zoom');
add_theme_support('wc-product-gallery-lightbox');
add_theme_support('wc-product-gallery-slider');

/**
 * Add support for WooCommerce Subscription templates
 * 
 * @return void
 */
add_filter('sage-woocommerce/templates', function ($paths) {
    $paths[] = WP_PLUGIN_DIR . '/woocommerce-subscriptions/templates/';
    return $paths;
});

/**
 * Change add to cart text on single product page
 * 
 * @return void
 */
add_filter('woocommerce_single_product_summary', 'woocommerce_description_hook_change'); 
function woocommerce_description_hook_change() {
	global $product;
	$product_data = $product->get_data();
	$product_description = $product_data['description'];
	$short_description = $product_data['short_description'];
	if ($product_description && !$short_description) {
		echo '<div class="woocommerce-product-details__short-description">' . $product_description . '</div>';
	}
}

/**
 * Get related posts of post
 * @since 1.0.0
 * 
 * @return void
 */
function get_related_posts($post_id, $related_count, $args = array()) {
	$terms = get_the_terms($post_id, 'category');
	
	if (empty($terms)) $terms = array();
	
	$term_list = wp_list_pluck($terms, 'slug');
	
	$related_args = array(
		'post_type' => 'post',
		'posts_per_page' => $related_count,
		'post_status' => 'publish',
		'post__not_in' => array($post_id),
		'orderby' => 'rand',
		'tax_query' => array(
			array(
			'taxonomy' => 'category',
			'field' => 'slug',
			'terms' => $term_list
			)
		)
	);

	return new WP_Query($related_args);
}

/**
 * Set up an options page
 * @since 1.0.0
 * 
 * @return void
 */
if (function_exists('acf_add_options_page')) {
    acf_add_options_page(
		array(
			'page_title' => 'Theme Options',
			'menu_title' => 'Theme Options',
			'menu_slug'  => 'theme-options',
			'capability' => 'edit_posts',
			'redirect'	 => false
		)
	);
}
