describe('greet' , function(){
    it('It greets Ane' , function(){
        assert.equal(greet('Ane'), 'Hello, Ane');
    });
    it('It greets Naphi' , function(){
        assert.equal(greet('Naphi'), 'Hello, Naphi');
    });
    it('It greets Shannon' , function(){
        assert.equal(greet('Shannon'), 'Hello, Shannon');
    });
    it('It greets Musa' , function(){
        assert.equal(greet('Musa'), 'Hello, Musa');
    });
    it('It greets Alwaba' , function(){
        assert.equal(greet('Alwaba'), 'Hello, Alwaba');
    });
});