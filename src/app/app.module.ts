var webpackConfig = require('./webpack.test');

module.exports = function(config) {
    var _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            { pattern: './config/karma-test-shim.js', watched: false }
        ],

        preprocessors: {
            './config/karma-test-shim.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true
    };

    config.set(_config);
};      "url": "https://github.com/ineffablep/angular2-boiler-plate/issues"
    },
    "homepage": "https://github.com/ineffablep/angular2-boiler-plate#readme",
    "dependencies": {
        "@angular/common": "^2.1.2",
        "@angular/compiler": "^2.1.2",
        "@angular/core": "^2.1.2",
        "@angular/forms": "^2.1.2",
        "@angular/http": "^2.1.2",
        "@angular/platform-browser": "^2.1.2",
        "@angular/platform-browser-dynamic": "^2.1.2",
        "@angular/router": "^3.1.2",
        "core-js": "^2.4.1",
        "hammerjs": "^2.0.8",
        "ie-shim": "^0.1.0",
        "rxjs": "^5.0.0-beta.12",
        "zone.js": "^0.6.26"
    },
    "devDependencies": {
        "@types/core-js": "^0.9.34",
        "@types/jasmine": "^2.5.36",
        "@types/node": "^6.0.46",
        "angular2-template-loader": "^0.6.0",
        "awesome-typescript-loader": "^2.2.4",
        "css-loader": "^0.25.0",
        "extract-text-webpack-plugin": "^1.0.1",
        "file-loader": "^0.9.0",
        "html-loader": "^0.4.4",
        "html-webpack-plugin": "^2.24.1",
        "jasmine-core": "^2.5.2",
        "karma": "^1.3.0",
        "karma-jasmine": "^1.0.2",
        "karma-phantomjs-launcher": "^1.0.2",
        "karma-sourcemap-loader": "^0.3.7",
        "karma-webpack": "^1.8.0",
        "null-loader": "^0.1.1",
        "phantomjs-prebuilt": "^2.1.13",
        "raw-loader": "^0.5.1",
        "rimraf": "^2.5.4",
        "style-loader": "^0.13.1",
        "typescript": "^2.0.6",
        "webpack": "^1.13.3",
        "webpack-dev-server": "^1.16.2",
        "webpack-merge": "^0.15.0"
    }
}