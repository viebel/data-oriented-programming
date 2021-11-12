var searchBooksResponseSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "required": ["title", "isbn", "authorNames"],
    "properties": {
      "title": {"type": "string"},
      "isbn": {"type": "string"},
      "authorNames": {
        "type": "array",
        "items": {"type": "string"}
      }
    }
  }
};
