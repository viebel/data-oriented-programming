var authorSchema = {
  "type": "object",
  "required": ["id", "name", "bookIsbns"],
  "properties": {
    "id": {"type": "string"},
    "name": {"type": "string"},
    "bookIsbns": {
      "type": "array",
      "items": {"type": "string"}
    }
  }
};
