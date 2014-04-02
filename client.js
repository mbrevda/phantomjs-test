var wd = require('webdriverjs')

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
       screenResolution: "1024x768"
   },
   //logLevel: 'verbose'
});


module.exports = client
