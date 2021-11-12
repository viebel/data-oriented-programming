Catalog.searchBooksByTitle = function(catalogData, query) {
  console.log(JSON.stringify(catalogData));
  console.log(JSON.stringify(query));
  var allBooks = _.get(catalogData, "booksByIsbn");
  var queryLowerCased = query.toLowerCase();
  var matchingBooks = _.filter(allBooks, function(book) {
    return _.get(book, "title")
      .toLowerCase()
      .startsWith(queryLowerCased);
  });
  var bookInfos = _.map(matchingBooks, function(book) {
    return Catalog.bookInfo(catalogData, book);
  });
  return bookInfos;
};
