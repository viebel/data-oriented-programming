var ajv = new Ajv(); // <1>

class Library {
  static searchBooksByTitle(payloadBody) {
    var payloadData = JSON.parse(payloadBody);
    if(!valid(searchBooksRequestSchema, payloadData)) {
      throw "Invalid request";
    }
    var results = Catalog.searchBooksByTitle(payloadData);
    if(!valid(searchBooksResponseSchema, results)) {
      var error = ajv.errorsText(ajv.errors); // <2>
      throw error;
    }
    return JSON.stringify(results);
  }
}

