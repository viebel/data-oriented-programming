var data = readData('/tmp/book-info-74ea159b.json');
var isbn = data[0];
var requestedFields = data[1];
var rawInfo = readData('/tmp/raw-book-info-742e259a.json');

function execWithMock(target, name, mockResult, execution) {
  var old = target[name];
  target[name] = function() {
    return mockResult;
  };
  var res = execution();
  target[name] = old;
  return res;
}

var result = execWithMock(OpenLibraryDataSource, "bookInfo", rawInfo,
     function () {
       return OpenLibraryDataSource.bookInfo(isbn, requestedFields);
     }
    );

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
