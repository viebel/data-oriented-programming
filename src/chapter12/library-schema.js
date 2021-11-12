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

var bookSchema = {
  "type": "object",
  "required": ["title", "isbn", "authorIds", "bookItems"],
  "properties": {
    "title": {"type": "string"},
    "publicationYear": publicationYearSchema,
    "isbn": isbnSchema,
    "publisher": {"type": "string"},
    "authorIds": {
      "type": "array",
      "items": authorIdSchema
    },
    "bookItems": {
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
    }
  }
};

var authorSchema = {
  "type": "object",
  "required": ["id", "name", "bookIsbns"],
  "properties": {
    "id": {"type": "string"},
    "name": {"type": "string"},
    "bookIsbns": {
      "items": isbnSchema
    }
  }
};

var catalogSchema = {
  "type": "object",
  "properties": {
    "booksByIsbn": {
      "type": "object",
      "additionalProperties": bookSchema
    },
    "authorsById": {
      "type": "object",
      "additionalProperties": authorSchema
    }
  },
  "required": ["booksByIsbn", "authorsById"]
};

var librarianSchema = {
  "type": "object",
  "required": ["email", "encryptedPassword"],
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    },
    "encryptedPassword": {"type": "string"},
  }
};


var memberSchema = {
  "type": "object",
  "required": ["email", "encryptedPassword", "isBlocked", "bookLendings"],
  "properties": {
    "email": {
      "type": "string",
      "format": "email"
    },
    "encryptedPassword": {"type": "string"},
    "isBlocked": {"type": "boolean"},
    "booklendings": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["lendingDate", "bookItemId", "bookIsbn"],
        "properties": {
          "lendingDate": {
            "type": "string",
            "format": "date"
          },
          "bookItemId": {"type": "string"},
          "bookIsbn": isbnSchema,
        }
      }
    }
  }
};

var userManagementSchema = {
  "type": "object",
  "properties": {
    "librariansByEmail": {
      "type": "object",
      "additionalProperties": librarianSchema
    },
    "membersByEmail": {
      "type": "object",
      "additionalProperties": memberSchema
    }
  },
  "required": ["librariansByEmail", "membersByEmail"]
};

var librarySchema = {
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "address": {"type": "string"},
    "catalog": catalogSchema,
    "userManagement": userManagementSchema
  },
  "required": ["name", "catalog", "userManagement"]
};
