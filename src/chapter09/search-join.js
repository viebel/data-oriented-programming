var dbClient;

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

