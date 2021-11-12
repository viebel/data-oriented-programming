var ajv = new Ajv({allErrors: true});

var basicBookInfoSchema = {
  "type": "object",
  "required": ["title"],
  "properties": {
    "title": {"type": "string"},
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
    "isbn_13": {
      "type": "array",
      "items": {"type": "string"}
    },
    "isbn_10": {
      "type": "array",
      "items": {"type": "string"}
    },
    "publish_date": {"type": "string"},
    "physical_dimensions": {"type": "string"}
  }
};

var mandatoryIsbn13 = {
  "type": "object",
  "required": ["isbn_13"]
};

var mandatoryIsbn10 = {
  "type": "object",
  "required": ["isbn_10"]
};

var bookInfoSchema = {
  "allOf": [
    basicBookInfoSchema,
    {
      "anyOf": [mandatoryIsbn13, mandatoryIsbn10]
    }
  ]
};

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
    if(!ajv.validate(bookInfoSchema, rawInfo)) {
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
