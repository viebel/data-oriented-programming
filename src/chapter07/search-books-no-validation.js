class Library {
  static searchBooksByTitle(payloadBody) {
    var payloadData = JSON.parse(payloadBody);
    var results = Catalog.searchBooksByTitle(payloadData);
    return JSON.stringify(results);
  }
}

