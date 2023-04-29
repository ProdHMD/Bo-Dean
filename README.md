# Bo Dean

Website for https://bovember.com built under the Bedrock 1.22.0 and Sage 10.5.1.

Please follow the installation methods at https://roots.io/bedrock/docs/deployment/ if not using Trellis.
Please follow the installation methods at https://roots.io/sage/docs/installation/ if reinstalling on another server.

## Step 1 - Install Bedrock

1. Globally install composer
    1. sudo apt update
    2. sudo apt install wget php-cli php-zip unzip
    3. wget -O composer-setup.php https://getcomposer.org/installer
    4. sudo php composer-setup.php --install-dir=/usr/local/bin --filename=composer

2. Run the following in the public directory:
    1. composer install

## Step 2 - Install Sage

1. Install the latest node.js LTS release
    volta install node

2. Globally install Yarn
    npm install --global yarn

3. Direct your terminal path to web/app/themes/bovember and run the following:
    1. yarn
    2. yarn build
    3. wp acorn optimize:clear

## Step 3 - Change enviornment variables

1. Change the .env: https://roots.io/bedrock/docs/environment-variables/

2. Update the WP_ENV to production, staging, or development

*Warning: Do not create multiple installations of this on the same server!*

**Enjoy!**
