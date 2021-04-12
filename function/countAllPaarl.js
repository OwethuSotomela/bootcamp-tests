function countAllPaarl(regNum) {
    var num = regNum.split(', ');
    console.log(num);

    var list = [];
    for (var i = 0; i < num.length; i++) {
        var result = num[i];

        if (result.startsWith('CJ')) {
            list.push(result);

        }
    }
    return list.length;
}