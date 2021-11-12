var languageSchema = {
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "type": {"enum": ["fr", "en"]}
  },
  "required": ["name", "type"],
};

