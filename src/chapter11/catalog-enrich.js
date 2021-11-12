class Catalog {
  static enrichedSearchBooksByTitle(searchPayload) {
    if(!ajv.validate(searchBooksRequestSchema, searchPayload)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Invalid request:" + errors;
    }
    var title = _.get(searchPayload, "title");
    var fields = _.get(searchPayload, "fields");

    var dbBookInfos = CatalogDataSource.matchingBooks(title);
    var isbns = _.map(dbBookInfos, "isbn");

    var openLibBookInfos = OpenLibraryDataSource.multipleBookInfo(isbns, fields);

    var res = joinArrays(dbBookInfos, openLibBookInfos);
    if(!ajv.validate(searchBooksResponseSchema, request)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Invalid response:" + errors;
    }

    return res;
  }
}
