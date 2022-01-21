var data = readData('test-data/searchBooksByTitle-68e57c85-2213-471a-8442-c4516e83d786.json');
var catalogData = data[0];
var query = data[1];

var result = Catalog.searchBooksByTitle(catalogData, query);
var expectedResult = [
  {
    "authorNames": [
      "Sean Covey",
      "Stephen Covey",
    ],
    "isbn": "978-1982137274",
    "title": "7 Habits of Highly Effective People",
  }
];

_.isEqual(result, expectedResult);
// → false
