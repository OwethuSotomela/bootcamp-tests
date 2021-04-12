describe('isFrom' , function(){
    it('It should identify Western Cape and Natal registration numbers and it must return true if the registration number ends with location indicator' , function(){
        assert.equal(isFrom('CJ 98912', 'CJ'), true);
    });
    it('It should identify Western Cape and Natal registration numbers and it must return false if the registration number is not from them' , function(){
        assert.equal(isFrom('DR 12 TY GP', 'GP'), false);

});
});