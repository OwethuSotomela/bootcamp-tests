describe('countAllPaarl' , function(){
    it('It should return the number of registration numbers in the string for Paarl' , function(){
        assert.equal(countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123', 'CJ'),3);
    }); 
    

});