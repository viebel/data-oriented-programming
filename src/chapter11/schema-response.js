var searchBooksResponseSchema = {
  "type": "object",
  "required": ["title", "isbn", "available"],
  "properties": {
    "title": {"type": "string"},
    "available": {"type": "boolean"},
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
    "isbn": {"type": "string"},
    "publish_date": {"type": "string"},
    "physical_dimensions": {"type": "string"}
  }
};
