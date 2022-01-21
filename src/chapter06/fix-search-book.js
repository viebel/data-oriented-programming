Catalog.searchBooksByTitle = function(catalogData, query) {
  var allBooks = _.get(catalogData, "booksByIsbn");
  var queryLowerCased = query.toLowerCase(); // <1>
  var matchingBooks = _.filter(allBooks, function(book) {
      return _.get(book, "title")
          .toLowerCase() // <2>
          .includes(queryLowerCased);
  });
  var bookInfos = _.map(matchingBooks, function(book) {
    return Catalog.bookInfo(catalogData, book);
  });
  return bookInfos;
};

