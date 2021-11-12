class Library {
  static searchBooksByTitle(payloadBody) {
    var payloadData = JSON.parse(payloadBody);
    if(!valid(searchBooksRequestSchema, payloadData)) {
      throw "Invalid request";
    }
    var results = Catalog.searchBooksByTitle(payloadData);
    return JSON.stringify(results);
  }
}

