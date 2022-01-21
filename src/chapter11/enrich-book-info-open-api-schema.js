var basicBookInfoSchema = {
  "type": "object",
  "required": ["title"],
  "properties": {
    "title": {"type": "string"},
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
    "isbn_13": {
      "type": "array",
      "items": {"type": "string"}
    },
    "isbn_10": {
      "type": "array",
      "items": {"type": "string"}
    },
    "publish_date": {"type": "string"},
    "physical_dimensions": {"type": "string"}
  }
};

var mandatoryIsbn13 = {
  "type": "object",
  "required": ["isbn_13"]
};

var mandatoryIsbn10 = {
  "type": "object",
  "required": ["isbn_10"]
};

var bookInfoSchema = {
  "allOf": [
    basicBookInfoSchema,
    {
      "anyOf": [mandatoryIsbn13, mandatoryIsbn10]
    }
  ]
};

