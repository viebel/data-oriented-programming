var searchBooksRequestSchema = {
  "type": "object",
  "properties": {
    "title": {"type": "string"},
    "fields": {
      "type": "array",
      "items": {
        "type": [
          "title",
          "full_title",
          "subtitle",
          "publisher",
          "publish_date",
          "weight",
          "physical_dimensions",
          "number_of_pages",
          "subjects",
          "publishers",
          "genre"
        ]
      }
    }
  },
  "required": ["title", "fields"]
};

var searchBooksResponseSchema = {
  "type": "object",
  "required": ["title", "isbn", "available"],
  "properties": {
    "title": {"type": "string"},
    "available": {"type": "boolean"},
    "publishers": {
      "type": "array",
      "items": {"type": "string"}
    },
    "number_of_pages": {"type": "integer"},
    "weight": {"type": "string"},
    "physical_format": {"type": "string"},
    "subjects": {
      "type": "array",
      "items": {"type": "string"}
    },
    "isbn": {"type": "string"},
    "publish_date": {"type": "string"},
    "physical_dimensions": {"type": "string"}
  }
};

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

