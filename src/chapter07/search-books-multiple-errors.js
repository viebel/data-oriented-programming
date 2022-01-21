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

var invalidSearchBooksRequest = { // <1>
  "myTitle": "habit",
  "fields": [1, 2]
};

var ajv = new Ajv({allErrors: true}); // <2>

ajv.validate(searchBooksRequestSchema, 
             invalidSearchBooksRequest);

ajv.errorsText(ajv.errors); // <3>
// → "data must have required property 'title', 
// →  data/fields/0 must be string, 
// →  data/fields/1 must be string"

