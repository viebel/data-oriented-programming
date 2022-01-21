class Catalog {
  static enrichedSearchBooksByTitle(request) {
    if(!ajv.validate(searchBooksRequestSchema, request)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Invalid request:" + errors;
    }

    var title = _.get(request, "title");
    var fields = _.get(request, "fields");

    var dbBookInfos = CatalogDataSource.matchingBooks(title);
    var isbns = _.map(dbBookInfos, "isbn");

    var openLibBookInfos = OpenLibraryDataSource.multipleBookInfo(isbns, fields);

    var response = joinArrays(dbBookInfos, openLibBookInfos);
    if(!ajv.validate(searchBooksResponseSchema, request)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Invalid response:" + errors;
    }
    return response;
  }
}

class Library {
    static searchBooksByTitle(payloadBody) {
      var payloadData = JSON.parse(payloadBody);
      var results = Catalog.searchBooksByTitle(payloadData);
      return JSON.stringify(results);
    }
}

