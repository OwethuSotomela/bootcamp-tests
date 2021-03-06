describe('findItemsOver20' , function(){
    var itemList=[
            {"name": "apples", "qty": 10},
            {"name": "pears", "qty": 37},
            {"name": "bananas", "qty": 27}
    ];
    it('It should return all the products that have a quantity higher than 20.' , function(){
        assert.deepEqual(findItemsOver20(itemList), [{"name":"pears", "qty": 37}, {"name": "bananas", "qty":27}]);
    });
    it('It should return all the products that have a quantity higher than 25.' , function(){
        assert.deepEqual(findItemsOver20(itemList), [{"name":"pears", "qty": 37}, {"name": "bananas", "qty":27}]);
    });
});
