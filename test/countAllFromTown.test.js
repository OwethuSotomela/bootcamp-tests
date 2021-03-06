describe('countAllFromTown' , function(){
    it('It should return the number of registration numbers in the string that is for that town.' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });
    it('It should return the number of registration numbers in the string that is not for that town.' , function(){
    assert.deepEqual(countAllFromTown('CL 124,CL 567,CL 345, CJ 456,CL 341','CJ') ,1);
    });
    it('It should return the number of registration numbers in the string that is not for that town.' , function(){
    assert.deepEqual(countAllFromTown('CL 124,CL 567,CL 345, CJ 456,CL 341','CJ') ,1);
    });

});