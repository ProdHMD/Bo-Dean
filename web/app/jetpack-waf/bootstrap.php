<?php
define( 'DISABLE_JETPACK_WAF', false );
if ( defined( 'DISABLE_JETPACK_WAF' ) && DISABLE_JETPACK_WAF ) return;
define( 'JETPACK_WAF_MODE', 'normal' );
define( 'JETPACK_WAF_SHARE_DATA', '1' );
define( 'JETPACK_WAF_DIR', '/srv/users/serverpilot/apps/livebodean/web/app/jetpack-waf' );
define( 'JETPACK_WAF_WPCONFIG', '/srv/users/serverpilot/apps/livebodean/web/app/../wp-config.php' );
require_once '/srv/users/serverpilot/apps/livebodean/web/app/plugins/jetpack/vendor/autoload.php';
Automattic\Jetpack\Waf\Waf_Runner::initialize();
