var authorComplexSchema = {
  "type": "object",
  "required": ["firstName", "lastName"],
  "properties": {
    "firstName": {
      "type": "string",
      "maxLength": 100
    },
    "lastName": {
      "type": "string",
      "maxLength": 100
    },
    "books": {
      "type": "integer",
      "minimum": 0,
      "maximum": 10000
    }
  }
};
