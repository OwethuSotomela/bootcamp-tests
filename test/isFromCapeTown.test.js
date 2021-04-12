describe('isFromCapeTown' , function(){
    it('It should return true if the registration numbers is for Cape Town, Cape Town registration numbers starts with CA' , function(){
        assert.equal(isFromCapeTown("CA"), true);
    });

});
