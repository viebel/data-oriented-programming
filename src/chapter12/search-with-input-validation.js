Catalog.searchBooksByTitle = function(catalogData, query) {
  if(dev()) { // <1>
    var args = [catalogData, query];
    if(!ajv.validate(searchBooksArgsSchema, args)) {
      var errors = ajv.errorsText(ajv.errors);
      throw ("searchBooksByTitle called with invalid arguments: " + errors);
    }
  }

  var allBooks = _.get(catalogData, "booksByIsbn");
  var matchingBooks = _.filter(allBooks, function(book) {
    return _.get(book, "title").includes(query);
  });
  var bookInfos = _.map(matchingBooks, function(book) {
    return Catalog.bookInfo(catalogData, book);
  });

  return bookInfos;
};
