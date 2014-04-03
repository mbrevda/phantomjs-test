var should = require('should')

describe('Running tests...', function(){
    var client = {}

    before(function(done){
        client = require('./client.js')
            .init(done)
            .windowHandleSize({width: 1024, height: 768})
    })

    after(function(done){
        client.end(done);
    })

    describe('No deps test', function(){
        it('should always run ok', function(){
            true.should.eql(true)
        })
    })


    describe('Google', function(done){
        it('should search', function(done){
            client
                .url('http://www.google.com/ncr')
                .setValue('[name=q]', 'WebdriveJS')
                .buttonClick('[name=btnG]')
                .getTitle(function(err, title){
                    if (err) done(err)
                    title.should.equal('WebdriveJS - Google Search')
                }).call(done)
        })
    })

    describe('Bing', function(done){
        it('should\'t have any cookies that arent from bing', function(done){
            client
                .url('http://www.bing.com')
                .getCookie('', function(err, cookies){
                    if (err) done(err)
                    for (var i in cookies) {
                        cookies[i].domain.should.not.containEql('google')
                    }
                }).call(done)
        })

        it('should search', function(done){
            client
                .url('http://www.bing.com')
                .setValue('[name=q]', 'WebdriveJS')
                .click('[name=go]')
                .getTitle(function(err, title){
                    if (err) done(err)
                    title.should.equal('WebdriveJS - Bing')
                }).call(done)
        })

    })

})
