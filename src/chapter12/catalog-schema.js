var isbnSchema = {
  "type": "string",
  "pattern": "^[0-9-]{10,20}$"
};

var libIdSchema = {
  "type": "string",
  "pattern": "^[a-z0-9-]{3,20}$"
};

var authorIdSchema ={
  "type": "string",
  "pattern": "[a-z-]{2,50}"
};

var bookItemSchema = {
  "type": "object",
  "additionalProperties": {
    "id": uuidSchema,
    "libId": libIdSchema,
    "purchaseDate": {
      "type": "string",
      "format": "date"
    },
    "isLent": {"type": "boolean"}
  }
};
