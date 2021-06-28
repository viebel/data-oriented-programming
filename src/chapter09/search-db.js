var dbClient;

class CatalogDB {
  static matchingBooks(title)  {
    var matchingBooksQuery = "SELECT title, isbn from books WHERE title = like '%$1%'";
    // error handling etc..
    var books = dbClient.query(matchingBooksQuery, [title]);
    return books;
  }

  static addMember(member) {
    var addMemberQuery = "INSERT INTO members (email, encrypted_password) VALUES ($1, $2)";
    // error handling etc..
    dbClient.query(addMemberQuery,
                   _.at(member, ["email",  "encryptedPassword"]));
  }

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
 WHERE books.title like '%$1%';
`;
    // error handling etc..
    var books = dbClient.query(matchingBooksQuery, [query]);
    return books;
  }
}


class Catalog {
  static searchBooksByTitle(title) {
    var books = CatalogDataSource.matchingBooks(title);
    var booksWithFields = _.map(books, function(book) {
      // teach here renameKeys so that we don't have to teach it in the context of join
      // make a function for renaming keys in a result set
      return _.renameKeys({
        "title": "bookTitle"
      });
    });
    return booksWithFields;
  }
  static searchBooksWithAuthorInfo(title) {
    var bookInfos = CatalogDataSource.searchBooksWithAuthorInfo(title);
    return aggregateFields(searchResults, "title", "author_name", "author_names");
  }
}

class Library {
    static searchBooksByTitle(title) {
        var results = Catalog.searchBooksByTitle(title);
      // convert to JSON
        return results;
    }
}

