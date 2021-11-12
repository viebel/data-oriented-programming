var bookItemSchema = {
  "type": "object",
  "properties":{
    "id": {"type": "string"},
    "libId": {"type": "string"},
    "purchaseDate": {"type": "string"},
    "isLent": {"type": "boolean"}
  },
  "required": ["id", "libId", "purchaseDate", "isLent"]
};

var bookSchema = {
  "type": "object",
  "required": ["title", "isbn", "authorIds", "bookItems"],
  "properties": {
    "title": {"type": "string"},
    "publicationYear": {"type": "integer"},
    "isbn": {"type": "string"},
    "authorIds": {
      "type": "array",
      "items": {"type": "string"}
    },
    "bookItems": {
      "type": "array",
      "items": bookItemSchema
    }
  }
};
