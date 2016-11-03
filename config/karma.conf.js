var webpackConfig = require('./webpack.test');

module.exports = function(config) {
    var _config = {
        // base path that will be used to resolve all patterns (e.g. files, exclude)
        basePath: '',
        /*
         * Frameworks to use
         *
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine'],
        /*
         * list of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [
            { pattern: './config/karma-test-shim.js', watched: false }
        ],
        /*
         * preprocess matching files before serving them to the browser
         * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        // Webpack Config at ./webpack.test.js
        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            type: 'in-memory'
        },
        reporters: ['mocha', 'coverage', 'remap-coverage'],

        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,

        /*
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
            'Chrome'
        ],
        
        singleRun: true
    };

    config.set(_config);
};