# Google Analytics Plugin for OpenSearch Dashboards

## What
This plugin incorporate google analytics into [OpenSearch Dashboards](https://github.com/opensearch-project/OpenSearch-Dashboards) by taking advantage of [react-ga4](https://github.com/PriceRunner/react-ga4) module.
This plugin enabled 2 configurations for OpenSearch Dashboards
- google_analytics_plugin.enabled with default set to true which allows to switch the plugin on/off
- google_analytics_plugin.trackingID with default set to empty which is the GA4 tracking Id you receive once you created your Google Analytics account

## How to use
1. Local build and test using docker
- fork [open search dashboard repo](https://github.com/opensearch-project/OpenSearch-Dashboards) to your own repository, and switch to the branch/tag you would like
- go to plugins folder inside opensearch-dashboards, git pull this plugin repo
- inside plugins folder, run `yarn build —opensearch-dashboards-version=<version name>`
- update necessary configs inside config/opensearch_dashboards.yml, this yml file will replace the one in the official image for local experiment
- run `docker-compose up -d`
- go to http://0.0.0.0:5601/app/home#/ and enter credentials to login, and if you already set up Google Analytics, you will see traffic data started coming in
2.Use zip file in production
- follow step 1 to build the plugin inside the plugin folder
- find the built artifact zipped inside build folder

## Create Google Analytics Account
1. Create google account use your email or create a gmail account
2. Go to google analytics site, click create account and fill in details, eg. account name
3. After account creation, then create property and give it a name
4. Record the tracking id number for use next

## Releases
- [2.3.0](https://github.com/BionIT/google-analytics-plugin/releases/tag/2.3.0)