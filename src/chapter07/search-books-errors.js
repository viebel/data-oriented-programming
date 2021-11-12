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

var invalidSearchBooksRequest = {
  "myTitle": "habit",
  "fields": ["title", "weight", "number_of_pages"]
};

var ajv = new Ajv(); // <1>

ajv.validate(searchBooksRequestSchema, invalidSearchBooksRequest);

ajv.errors // <2>
