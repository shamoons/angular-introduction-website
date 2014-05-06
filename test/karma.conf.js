module.exports = function(config) {
    config.set({
        basePath: '../',

        files: [
            'public/scripts/**/*.js',
            'test/lib/angular/angular-mocks.js',
            'test/unit/**/*.js'
        ],

        // exclude: [
        //     'app/lib/angular/angular-loader.js',
        //     'app/lib/angular/*.min.js',
        //     'app/lib/angular/angular-scenario.js'
        // ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-junit-reporter',
            'karma-jasmine',
            'karma-phantomjs-launcher'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    })
}