var authorSchema = {
  "type": "object",
  "required": ["name", "bookIsbns"],
  "properties": {
    "name": {"type": "string"},
    "bookIsbns": {
      "type": "array",
      "items": {"type": "string"}
    }
  }
};
