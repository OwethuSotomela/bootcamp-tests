describe('regCheck' , function(){
    it('It should check and return true if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('DV 23 LP GP', 'GP'), true);
    });
    it('It should check and return true if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('DRT 122 L', 'L'), true);
    })
    it('It should check and return true if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('DRT 258 EC', 'EC'), true);
    });
    it('It should check and return true if a registration number is for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('GRZ 162 MP', 'MP'), true);
    });
    it('It should check and return false if a registration number is not for GP, L, EC, MP registration plates.', function(){
        assert.equal(regCheck('CA 182736', 'CA'), false);

});
});