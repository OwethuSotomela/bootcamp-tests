describe('transportFee' , function(){
    it('It should return the price based on the shift on the shift you are working and in the morning shift the transport cost is R20', function(){
        assert.equal(transportFee('morning'), 'R20');
    });
    it('It should return the price of the afternoon shift and the cost is R10.', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    })
    it('It should return the price of the night shift and the nightshift is free.', function(){
        assert.equal(transportFee('nightshift'), 'free');
    })



});

