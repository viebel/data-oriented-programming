function dumpData(data, context) {
  var path = dataFilePath(context);
    var content = JSON.stringify(data, null, 2); // <1> <2>
    fs.writeFile(path, content, function () { 
        console.log("Data for " + context + "stored in: " + path); 
  });
}


