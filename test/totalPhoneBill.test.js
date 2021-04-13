describe('totalPhoneBill' , function(){
    it('It should calculate the total bill for an sms', function(){
        assert.equal(totalPhoneBill('sms'), "R" + 0.65);
    }); 
    it('It should calculate the total bill for a phone call', function(){
        assert.equal(totalPhoneBill('call'), "R" + 2.75);
    }); 
    it('It should calculate the total bill for a phone call and an sms', function(){
        assert.equal(totalPhoneBill('call, sms'), "R" + '3.40');
    }); 
    
});

