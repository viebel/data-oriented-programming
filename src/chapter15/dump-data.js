function dumpData(data, context) {
  var path = dataFilePath(context);
  var content = JSON.stringify(data);
    fs.writeFile(path, content, function () { // <1> <2>
        console.log("Data for " + context + "stored in: " + path); // <3> 
  });
}
