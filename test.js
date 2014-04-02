var should = require('should')

describe('Google search test', function(){
    this.timeout(15 * 1000)
    var client = {}

    before(function(done){
        client = require('./client.js')
            .init(done)
            //.windowHandleSize({width: 1024, height: 768})
    })

    after(function(done){
        client.end(done);
    })

    it('Local test', function(){
        true.should.eql(true)
    })

    it('Trying a google search', function(done){
        client
            .url('http://www.google.com/ncr')
            .setValue('[name=q]', 'WebdriveJS')
            .buttonClick('[name=btnG]')
            .getTitle(function(err, title){
                if (err) done(err)
                title.should.equal('WebdriveJS - Google Search')
            }).call(done)
    })

    it('Test Bing', function(done){
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
