var searchBooksRequestSchema = {
  "type": "object",
  "properties": {
    "title": {"type": "string"},
    "fields": {
      "type": "array",
      "items": {
        "enum": [
          "title",
          "full_title",
          "subtitle",
          "publisher",
          "publish_date",
          "weight",
          "physical_dimensions",
          "number_of_pages",
          "subjects",
          "publishers",
          "genre"
        ]
      }
    }
  },
  "required": ["title", "fields"]
};
