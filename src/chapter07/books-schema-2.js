var booksFromDBSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "required": ["title", "isbn", "available"],
    "additionalProperties": false,
    "properties": {
      "title": {"type": "string"},
      "available": {"type": "boolean"},
      "isbn": {"type": "string"}
    }
  }
};
