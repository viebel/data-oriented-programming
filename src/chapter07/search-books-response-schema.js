var searchBooksResponseSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "required": ["title", "available"],
    "properties": {
      "title": {"type": "string"},
      "available": {"type": "boolean"},
      "subtitle": {"type": "string"},
      "number_of_pages": {"type": "integer"},
      "subjects": {
        "type": "array",
        "items": {"type": "string"}
      },
      "isbn": {"type": "string"},
      "isbn_13": {"type": "string"}
    }
  }
};
