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
    var relevantInfo = _.pick(_.pick(rawInfo, relevantFields), requestedFields);
    return  _.set(relevantInfo, "isbn", isbn);
  }
}
