var mocha = require('mocha')

var mocha = new mocha({
    'reporter': 'spec'
}).addFile('test.js')

var phantomjs = require('child_process').exec(
    require('phantomjs').path + ' --webdriver=4444',
    function(err, stdout, stderr) {
        if (err) console.log(err)
      // handle results
    }
)

phantomjs.stdout.on('data', function(data){
    var buff = new Buffer(data);
    console.log('phantomjs stdout: ' + buff.toString('utf8'));
});

phantomjs.stderr.on('data', function(data){
    var buff = new Buffer(data);
    console.log('phantomjs stderr: ' + buff.toString('utf8'));
});

process.on('exit', function (){
    phantomjs.kill('SIGTERM');
});

setTimeout(function(){
    mocha.run(function(failures){
        process.exit(failures)
        client.end()
    })
}, 2000)
