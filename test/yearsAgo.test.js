describe('yearsAgo' , function(){
    it('It should return how many years ago the year passed in or 1976 is from the current year(2021)' , function(){
        assert.equal(yearsAgo('1976'), 45);
    });
    it('It should return how many years ago the year 2009 is from the year 2021' , function(){
        assert.equal(yearsAgo('2009'), 12);
    });
    it('It should return how many years ago the year 2000 is from the year 2021' , function(){
        assert.equal(yearsAgo('2000'), 21);
    });
    it('It should return how many years ago the year 1980 is from the year 2021' , function(){
        assert.equal(yearsAgo('1980'), 41);
    });
    it('It should return how many years ago the year 1818 is from the year 2021' , function(){
        assert.equal(yearsAgo('1818'), 203);
    });
});