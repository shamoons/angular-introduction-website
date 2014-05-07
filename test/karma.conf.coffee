module.exports = (config) ->
  config.set
    basePath: '../'

    files: [
      'public/bower_components/lodash/dist/lodash.min.js'
      'public/bower_components/angular/angular.min.js'
      'public/bower_components/angular-mocks/angular-mocks.js'
      'public/bower_components/angular-route/angular-route.min.js'
      'public/bower_components/angular-strap/dist/angular-strap.min.js'
      'public/scripts/**/*.js'
      'test/unit/**/*.js'
    ]

    singleRun: true

    frameworks: ['jasmine']

    browsers: ['PhantomJS']

    plugins: [
      'karma-jasmine'
      'karma-phantomjs-launcher'
      'karma-story-reporter'
    ]

    reporters: ['story']

    logLevel: config.LOG_INFO
