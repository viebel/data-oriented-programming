var validAuthorData = {
  firstName: "Isaac",
  lastName: "Asimov",
  books: 500
};

ajv.validate(addAuthorRequestSchema, validAuthorData); // true <1>

var invalidAuthorData = {
  firstName: "Isaac",
  lastNam: "Asimov",
  books: "five hundred"
};

ajv.validate(addAuthorRequestSchema, invalidAuthorData); // false <2>
