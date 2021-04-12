describe('findItemsOver' , function(){
    var productList=[{"name": "apples", "qty":10},{"name":"bananas", "qty":27},{"name":"apples","qty":3}];
    var threshold=[{"name":"apples", "qty":10},{"name":"pears","qty":19},{"name":"bananas","qty":17},{"name":"apples","qty":3}]
    it('It should return all the products that have a quantity higher than the threshhold.' , function(){
      
        assert.deepEqual(findItemsOver(productList, threshold) [{"name": "pears", "qty":37}, {"name": "bananas", "qty":27}]);
    });

});