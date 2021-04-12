describe('isFromBellville' , function(){
    it('It returns true for registration numbers that starts with CY' , function(){
        assert.equal(isFromBellville("CY"), true);


    });
    it('It returns false for registration numbers that do not start with CY' , function(){
        assert.equal(isFromBellville("CA"), false);

});
    


});
