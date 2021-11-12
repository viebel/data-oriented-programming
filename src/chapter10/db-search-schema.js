var dbSearchResultSchema = {
  "type": "array",
  "items": {
    "type": "object",
    "required": ["title", "isbn", "publication_year"],
    "properties": {
      "title": {"type": "string"},
      "isbn": {"type": "string"},
      "publication_year": {"type": "integer"}
    }
  }
};
