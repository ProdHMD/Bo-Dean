<!doctype html>
<html <?php language_attributes(); ?>>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
  </head>

  <body class="body<?php echo (is_user_logged_in()) ? ' logged-in' : ''; ?>">
    <?php wp_body_open(); ?>
    <?php do_action('get_header'); ?>

    <div id="app" data-barba="wrapper">
      <?php echo view(app('sage.view'), app('sage.data'))->render(); ?>
    </div>

    <?php do_action('get_footer'); ?>
    <?php wp_footer(); ?>
  </body>
</html>
