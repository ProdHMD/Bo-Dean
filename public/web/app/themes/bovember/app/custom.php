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
