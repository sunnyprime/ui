/* eslint-disable @typescript-eslint/no-var-requires */
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const appConfig = require('./config/config.js');

// Optimise this by writing a plugin reducer to make this cleaner
module.exports = (withCSS(withSass({
    poweredByHeader: false,
    distDir: 'dist',
    generateEtags: false,
    // todo later based on deployment script or should not be needed at all if scaling via AMI
    // generateBuildId: async () => {
    //   // For example get the latest git commit hash here
    //   return 'my-build-id'
    // },
    serverRuntimeConfig: {
        NEWRELIC_LIC_KEY: 'somesmallcasekeywhichisverylonggoeshere',
        GRAYLOG_HOST: 'graylog-gelf.bricknbolt.com',
        GRAYLOG_PORT: 12201,
        GRAYLOG_APPLICATION: 'react-ui',
        GRAYLOG_FACILITY: 'foundation_react_ui',
        REDIS_HOST: 'localhost',
        REDIS_PORT: '6379',
        REDIS_DB: '1',
        RECAPTCHA_SECRET_KEY: 'somerecaptchasecret',
    },
    publicRuntimeConfig: {
        NEWRELIC_APP_ID: '12345678',
        NEWRELIC_BROWSER_KEY: 'smallkeyhere',
        SENTRY_DSN: 'https://abc@sentry9.bricknbolt.com/67',
        GOOGLE_MAPS_KEY: 'googlemapssecret',
        GLOBAL_GOOGLE_ANALYTICS_TRACKING_ID: 'UA-XXX-1',
        AMP_GA_TRACKING_ID: 'UA-XXX-1',
        GOOGLE_ONETAP_CLIENT_ID: 'UA-XXX-1',
        GOOGLE_TAG_MANAGER_ID: 'GTM-XXXXX',
        RECAPTCHA_SITE_KEY: 'somerecaptchasitekey',
        __CONFIG: {
            ...appConfig,
        },
    },
})));
