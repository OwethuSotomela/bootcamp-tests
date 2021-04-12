describe('isFromLimpopo' , function(){
    it('It should return true if the registration numbers is for Limpopo, Limpopo registration numbers ends with L' , function(){
        assert.equal(isFromLimpopo("L"), true);
    });
it('It should return false if the registration number is not for Limpopo, Limpopo registration numbers ends with L', function(){
    assert.equal(isFromLimpopo("GP"), false);

});
});