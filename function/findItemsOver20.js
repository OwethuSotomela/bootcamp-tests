function findItemsOver20(productList){
    var products = [];
      for(var i=0;i<productList.length; i++){
        if(productList[i].qty > 20){
               products.push(productList[i]);
           }
    }
    return products;
  }