function authorNames(catalogData, book) {
  return _.map(_.get(book, "authorIds"),
               function(authorId) {
    return _.get(catalogData, ["authorsById", authorId, "name"]);
  });
}

function bookInfo(catalogData, book) {
  return  {
    "title": _.get(book, "title"),
    "isbn": _.get(book, "isbn"),
    "authorNames": authorNames(catalogData, book)
  };
}

function searchBooksByTitle(libraryData, query) {
  var catalogData = _.get(libraryData, "catalog");
  var allBooks = _.get(catalogData, "booksByIsbn");
  var matchingBooks = _.filter(allBooks, function(book) { 
    return _.get(book, "title").toLowerCase()
      .includes(query.toLowerCase());
  });
  return JSON.stringify(_.map(matchingBooks, function(book) {
    return bookInfo(catalogData, book);
  }));
}

searchBooksByTitle(libraryData, "watCH");

