class Catalog {
  static authorNames(catalogData, authorIds) {
    return authorIds.map(function(authorId) {
      return catalogData.getIn(["authorsById", authorId, "name"]);
    });
  }

  static bookInfo(catalogData, book) {
    var bookInfo =  Immutable.Map({
      "title": book.get("title"),
      "isbn": book.get("isbn"),
      "authorNames": Catalog.authorNames(catalogData, book.get("authorIds"))
    });
    return bookInfo;
  }
}
