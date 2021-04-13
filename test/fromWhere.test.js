describe('fromWhere' , function(){
    it('It should take a car registration number as a parameter and returns the town the car is from.', function(){
        assert.equal(fromWhere('CA 182736'), 'Cape Town');
    }); 
    it('It should take a car registration number as a parameter and returns the town the car is from.', function(){
        assert.equal(fromWhere('BRN 903 L'), 'Some other place!');
    }); 
    it('It should take a car registration number as a parameter and returns the town the car is from.', function(){
        assert.equal(fromWhere('GRS 171 EC'), 'Some other place!');
    });
    it('It should take a car registration number as a parameter and returns the town the car is from.', function(){
        assert.equal(fromWhere('PTS 740 MP'), 'Some other place!');
    });
    it('It should take a car registration number as a parameter and returns the town the car is from.', function(){
        assert.equal(fromWhere('CF 10  VD GP'), 'Some other place!');
    });

});
