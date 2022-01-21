var myData = {num: 42};
setTimeout(function (data){
    console.log(data.num);
}, 1000, myData);
myData.num = 0;
