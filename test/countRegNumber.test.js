describe('countRegNumber' , function(){
    it('It should return the number of registration numbers in the string' , function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    it('It should return the number of registration numbers in the string for Cape Town' , function(){
        assert.equal(countRegNumber('CA 182736'), 1);
    });
    it('It should return the number of registration numbers in the string for Bellville' , function(){
        assert.equal(countRegNumber('CY 523519'), 1);
    });
    it('It should return the number of registration numbers in the string for Paarl' , function(){
        assert.equal(countRegNumber('CJ 812328'), 1);
    });

});