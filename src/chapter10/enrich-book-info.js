
class OpenLibraryDataSource {
  static rawBookInfo(isbn) {
    var url = `https://openlibrary.org/isbn/${isbn}.json`;
    var jsonString = fetchResponseBody(url);
    return JSON.parse(jsonString);
  }

  static bookInfo(isbn, requestedFields) {
    var relevantFields = ["title", "full_title",
                          "subtitle", "publisher",
                          "publish_date", "weight",
                          "physical_dimensions", "genre",
                          "subjects", "number_of_pages"];
    var rawInfo = rawBookInfo(isbn);
    var relevantInfo = _.pick(_.pick(rawInfo, relevantFields), requestedFields);
    return  _.set(relevantInfo, "isbn", isbn);
  }

  static multipleBookInfo(isbns, fields) {
    return _.map(function(isbn) {
      return bookInfo(isbn, fields);
    }, isbns);
  }
}

var dbClient;

class CatalogDB {
  static matchingBooks(title)  {
    var matchingBooksQuery = `
SELECT isbn, available
 FROM books
 WHERE title = like '%$1%;
`;
    var books = dbClient.query(catalogDB, matchingBooksQuery, [title]);
    return books;
  }
}

class Catalog {
  static enrichedSearchBooksByTitle(args) {
    var title = _.get(args, "title");
    var fields = _.get(args, "fields");

    var dbBookInfos = CatalogDataSource.matchingBooks(title);
    var isbns = _.map(dbBookInfos, "isbn");

    var openLibBookInfos = OpenLibraryDataSource.multipleBookInfo(isbns, fields);

    return _.joinArrays(dbBookInfos, openLibBookInfos);
  }
}

class Library {
    static searchBooksByTitle(payloadBody) {
      var payloadData = JSON.parse(payloadBody);
      var results = Catalog.searchBooksByTitle(payloadData);
      return JSON.stringify(results);
    }
}

