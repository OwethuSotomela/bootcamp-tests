function mostProfitableDepartment(productList){
    console.log(productList)
   var salesDataMap = {};
   var productList1 = [];
     for(var i=0;i<productList.length; i++){
       if(salesDataMap[productList[i].department] == undefined){
             salesDataMap[productList[i].department] = productList[i].sales;
         }
       else{
               salesDataMap[productList[i].department] += productList[i].sales;
           }
   }
   console.log(salesDataMap);
    var currentMaxSalesDepartment = 0;
   var theDepart = "";
   for (var salesDataDepartment in salesDataMap) {
       var currentTotal = salesDataMap[salesDataDepartment];
     if(currentTotal > currentMaxSalesDepartment){
       currentMaxSalesDepartment = currentTotal;
            theDepart = salesDataDepartment;
        }
   }
    console.log(theDepart);
   return theDepart;
 }


 function mostProfitableDay(profitDay){
  const map = {};
  for (var i in profitDay){
    const dept = profitDay[i];
    map[dept.day] = 0;
  }
 for(var i in  profitDay){
    const dept = profitDay[i];
    var currentDeptTotal = map[dept.day];
    currentDeptTotal += dept.sales;
    map[dept.day] = currentDeptTotal;
  }
  var currentMaxDays = 0;
  var currentPro = "";
  for (const mostProfit in map){
    const currentProDay = map[mostProfit];
    if( currentProDay > currentMaxDays){
      currentMaxDays = currentProDay;
      console.log(currentMaxDays);
      currentPro = mostProfit;
    }
  }
  console.log(currentPro);
  return  currentPro;

}
 