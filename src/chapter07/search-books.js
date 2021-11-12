class Library {
  static searchBooksByTitle(payloadBody) {
    var payloadData = JSON.parse(payloadBody);
    if(!valid(searchBooksRequestSchema, payloadData)) {
      throw "Invalid request";
    }
    var results = Catalog.searchBooksByTitle(payloadData);
    if(!valid(searchBooksResponseSchema, results)) {
      throw "Invalid response";
    }
    return JSON.stringify(results);
  }
}

