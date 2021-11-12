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
    if(!ajv.validate(dbSearchResultSchema, bookInfoSchema)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Internal error: Unexpected result from Open Books API: " + errors;
    }
    var relevantInfo = _.pick(_.pick(rawInfo, relevantFields), requestedFields);
    return  _.set(relevantInfo, "isbn", isbn);
  }

  static multipleBookInfo(isbns, fields) {
    return _.map(function(isbn) {
      return bookInfo(isbn, fields);
    }, isbns);
  }
}
