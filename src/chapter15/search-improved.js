Catalog.searchBooksByTitle = function(catalogData, query) {
  console.log(JSON.stringify(catalogData));
  console.log(JSON.stringify(query));
  var allBooks = _.get(catalogData, "booksByIsbn");
  var matchingBooks = _.filter(allBooks, function(book) {
    return hasWordStartingWith(_.get(book, "title"), query);
  });
  var bookInfos = _.map(matchingBooks, function(book) {
    return Catalog.bookInfo(catalogData, book);
  });
  return bookInfos;
};
