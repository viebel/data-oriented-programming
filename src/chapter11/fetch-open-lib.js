var ajv = new Ajv({allErrors: true});
class OpenLibraryDataSource {
  static rawBookInfo(isbn) {
    var url = `https://openlibrary.org/isbn/${isbn}.json`;
    var jsonString = fetchResponseBody(url); // <1>
    return JSON.parse(jsonString);
  }

  static bookInfo(isbn, requestedFields) {
    var relevantFields = ["title", "full_title",
                          "subtitle", "publisher",
                          "publish_date", "weight",
                          "physical_dimensions", "genre",
                          "subjects", "number_of_pages"];
    var rawInfo = rawBookInfo(isbn);
    if(!ajv.validate(bookInfoSchema, rawInfo)) {
      var errors = ajv.errorsText(ajv.errors);
      throw "Internal error: Unexpected result from Open Books API: " + errors;
    }
    var relevantInfo = _.pick(_.pick(rawInfo, relevantFields), requestedFields);
    return  _.set(relevantInfo, "isbn", isbn);
  }
}
