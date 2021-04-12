describe('fromWhere' , function(){
    it('It should take a car registration number as a parameter and returns the town the car is from.', function(){
        assert.equal(fromWhere('CA 182736'), 'Cape Town');
    }); 

});
