describe('isWeekday' , function(){
    it('It should return true if the parameter passed in is a day of the week (ie. Not a weekend day).' , function(){
        assert.equal(isWeekday('Monday'), true);
    });
    it('It should return false if the parameter passed in is not a day of the week (ie. a weekend day).' , function(){
        assert.equal(isWeekday('Saturday'), false);

});
});