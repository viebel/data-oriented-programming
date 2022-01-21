var searchBooksRequestSchema = {
  "type": "object",
  "properties": {
    "title": {"type": "string"},
    "fields": {
      "type": "array",
      "items": {"type": "string"}
    }
  },
  "required": ["title", "fields"]
};

var searchBooksRequest = {
  "title": "habit",
  "fields": ["title", "weight", "number_of_pages"]
};


validate(searchBooksRequestSchema, searchBooksRequest);
// → true
