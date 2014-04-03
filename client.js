var wd = require('webdriverjs'),
    path = require('path')

var client;

/*
client = wd.remote({
    desiredCapabilities: {
        browserName: 'chrome',
        version: '27',
        platform: 'XP'
    },
    host: 'ondemand.saucelabs.com',
    port: 80,
    user: '',
    key: ''
})
*/
client = wd.remote({
   desiredCapabilities: {
       browserName: 'phantomjs',
      'phantomjs.binary.path': require('phantomjs').path,
       screenResolution: '1024x768'
   },
   //logLevel: 'verbose'
   port: process.env.SELENIUM_PORT
});


module.exports = client
