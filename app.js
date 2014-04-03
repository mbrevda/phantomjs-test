var Mocha = require('mocha'),
    selenium = require('selenium-launcher'),
    path = require('path')

var mocha = new Mocha({
    'reporter': 'spec'
}).addFile('test.js')

//process.env.PATH += ':' + path.dirname(require('phantomjs').path)
selenium(function(err, selenium) {
    if (err) throw err
    process.env.SELENIUM_PORT = selenium.port
    mocha.run(function(failures){
        process.exit(failures)
        selenium.kill('SIGTERM');
    })
})
