function changeValue(obj, k, v) {
    var res = Object.assign({}, obj);
    res[k] = v;
    return res;
}

var myData = {num: 42};
var yourData = changeValue(myData, "num", myData.num + 1);
console.log(myData.num);
// → 43
