Catalog.searchBooksByTitle = function(catalogData, query) {
  if(dev()) { 
    if(!ajv.validate(searchBooksArgsSchema, [catalogData, query])) {
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

  if(dev()) {
    if(!ajv.validate(searchBooksResponseSchema, bookInfos)) {
      var errors = ajv.errorsText(ajv.errors);
      throw ("searchBooksByTitle returned a value that doesn't conform to schema: " + errors);
    }
  }
  return bookInfos;
};
