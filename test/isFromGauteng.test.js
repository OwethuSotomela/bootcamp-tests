describe('isFromGauteng' , function(){
    it('It should return true if the registration numbers is for Gauteng, Gauteng registration numbers ends with GP' , function(){
        assert.equal(isFromGauteng("GP"), true);
    });

});