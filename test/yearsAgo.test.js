describe('yearsAgo' , function(){
    it('It should return how many years ago the year passed in is from the current year' , function(){
        assert.equal(yearsAgo('1976'), 45);
    });
});