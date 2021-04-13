describe('isFromBellville' , function(){
    it('It returns true for registration numbers that are from Bellville or starts with CY' , function(){
        assert.equal(isFromBellville("CY"), true);
    });

    it('It returns false for registration numbers that are not for Bellville or do not start with CY' , function(){
        assert.equal(isFromBellville("CA"), false);
    });

    it('It returns false for registration numbers that are for Gauteng and do not start with CY' , function(){
        assert.equal(isFromBellville("GP"), false);
    });
    it('It returns false for registration numbers that are for Mpumalanga and do not start with CY' , function(){
        assert.equal(isFromBellville("MP"), false);
    });
    it('It returns false for registration numbers that are for Limpopo and do not start with CY' , function(){
        assert.equal(isFromBellville("L"), false);
    });
    


});
