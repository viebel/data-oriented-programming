var dbClient;

var dbSearchResultWithAuthorSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "required": ["title", "isbn", "author_name"],
    "properties": {
      "title": {"type": "string"},
      "isbn": {"type": "string"},
      "author_name": {"type": "string"}
    }
  }
};

class CatalogDB {
  static matchingBooksWithAuthorInfo(title)  {
    var matchingBooksQuery = `
SELECT
  title, isbn, authors.name AS author_name
  FROM
      books
      INNER JOIN
      book_authors
          ON books.isbn = book_authors.book_isbn
      INNER JOIN
      authors
          ON book_authors.author_id = authors.id
 WHERE books.title LIKE '%$1%';
`;
    var books = dbClient.query(matchingBooksQuery, [query]);
    if(!ajv.validate(dbSearchResultWithAuthorSchema, books)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Internal error: Unexpected result from the database: " + errors;
    }

    return books;
  }
}


class Catalog {
  static searchBooksWithAuthorInfo(title) {
    var bookInfos = CatalogDataSource.searchBooksWithAuthorInfo(title);
    var bookInfoRenamed = renameResultKeys(bookInfos, {"author_name": "authorName"});
    return aggregateFields(searchResults, "title", "authorName", "authorNames");
  }
}

