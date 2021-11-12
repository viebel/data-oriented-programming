Catalog = {};
Catalog.searchBooksByTitle = function(catalogData, query) {
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

Catalog.authorNames = function (catalogData, authorIds) {
  return _.map(authorIds, function(authorId) {
    return _.get(catalogData, ["authorsById", authorId, "name"]);
  });
};

Catalog.bookInfo = function (catalogData, book) {
  return  {
    "title": _.get(book, "title"),
    "isbn": _.get(book, "isbn"),
    "authorNames": Catalog.authorNames(catalogData, _.get(book, "authorIds"))
  };
};
