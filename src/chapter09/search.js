class Catalog {
  static authorNames(catalogData, authorIds) {
    return Immutable.map(authorIds, function(authorId) {
      return Immutable.getIn(catalogData, ["authorsById", authorId, "name"]);
    });
  }

  static bookInfo(catalogData, book) {
    var bookInfo =  Immutable.Map({
      "title": Immutable.get(book, "title"),
      "isbn": Immutable.get(book, "isbn"),
      "authorNames": Catalog.authorNames(catalogData, Immutable.get(book, "authorIds"))
    });
    return bookInfo;
  }

  static searchBooksByTitle(catalogData, query) {
    var allBooks = Immutable.get(catalogData, "booksByIsbn");
    var queryLowerCased = query.toLowerCase();
    var matchingBooks = Immutable.filter(allBooks, function(book) {
      return Immutable.get(book, "title").
        toLowerCase().
        includes(queryLowerCased);
    });
    var bookInfos = Immutable.map(matchingBooks, function(book) {
      return Catalog.bookInfo(catalogData, book);
    });
    return bookInfos;
  }
}
