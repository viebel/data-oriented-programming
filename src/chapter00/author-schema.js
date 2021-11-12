var authorSchema = {
  "type": "object",
  "required": ["firstName", "lastName"], // <1>
  "properties": {
    "firstName": {"type": "string"},
    "lastName": {"type": "string"},
    "books": {"type": "number"} // <2>
  }
};
