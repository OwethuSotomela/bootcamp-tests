describe('greet' , function(){
    it('It greets Ane' , function(){
        assert.equal(greet('Ane'), 'Hello, Ane');
    });
    it('It greets Naphi' , function(){
        assert.equal(greet('Naphi'), 'Hello, Naphi');
});
});