var capturedDataFolder = "test-data"; // <1>
function dataFilePath(context) {
    var uuid = generateUUID(); // <2>
    return capturedDataFolder + "/" + context + "-" + ".json"; // <3>
}
