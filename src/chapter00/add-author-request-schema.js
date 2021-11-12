var addAuthorRequestSchema = {
  "type": "object", // <1>
  "required": ["firstName", "lastName"], // <2>
  "properties": {
    "firstName": {"type": "string"}, // <3>
    "lastName": {"type": "string"}, // <4>
    "books": {"type": "integer"} // <5>
  }
};
