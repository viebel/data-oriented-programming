var myData = {num: 42};
var yourData = myData;

yourData.num = yourData.num + 1;
console.log(myData.num);
// → 43
