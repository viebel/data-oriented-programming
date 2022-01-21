var searchBooksRequestSchema = {
  "type": "object",
  "properties": {
    "title": {"type": "string"},
    "fields": {
      "type": "array",
      "items": {
        "enum": [
          "publishers",
          "number_of_pages",
          "weight",
          "physical_format",
          "subjects",
          "publish_date",
          "physical_dimensions"
        ]
      }
    }
  },
  "required": ["title", "fields"]
};
