var catalogSchema = {
  "type": "object",
  "properties": {
    "booksByIsbn": {
      "type": "object",
      "additionalProperties": bookSchema
    },
    "authorsById": {
      "type": "object",
      "additionalProperties": authorSchema
    }
  },
  "required": ["booksByIsbn", "authorsById"]
};
