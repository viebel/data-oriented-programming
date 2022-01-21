var data = readData('test-data/searchBooksByTitle-68e57c85-2213-471a-8442-c4516e83d786.json');
var catalogData = data[0];
var queries = ["abit", "bit", "7 abit", "habit of"];
var expectedResult = [ ];

_.every(queries, function(query) {
    var result = Catalog.searchBooksByTitle(catalogData, query);
    return _.isEqual(result, expectedResult);
});
// → [true, true, true, true]
