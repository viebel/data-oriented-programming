var dbSearchResultSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "required": ["isbn", "available"],
    "properties": {
      "isbn": {"type": "string"},
      "available": {"type": "boolean"}
    }
  }
};

class CatalogDB {
  static matchingBooks(title)  {
    var matchingBooksQuery = `
SELECT isbn, available
 FROM books
 WHERE title = like '%$1%';
`;
    var books = dbClient.query(catalogDB, matchingBooksQuery, [title]);
    if(!ajv.validate(dbSearchResultSchema, books)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Internal error: Unexpected result from the database: " + errors;
    }
    return books;
  }
}
