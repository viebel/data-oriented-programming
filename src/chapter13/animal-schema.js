var animalSchema = {
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "type": {"enum": ["dog", "cat", "cow"]}
  },
  "required": ["name", "type"],
};

