describe('totalPhoneBill' , function(){
    it('It should calculate the total bill for 2 phone calls and 3 smses', function(){
        assert.equal(totalPhoneBill('sms'), "R" + 0.65);
    }); 
    it('It should calculate the total bill for 2 phone calls and 3 smses', function(){
        assert.equal(totalPhoneBill('call'), "R" + 2.75);
    }); 
});

