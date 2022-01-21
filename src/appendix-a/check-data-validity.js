var validAuthorData = {
  firstName: "Isaac",
  lastName: "Asimov",
  books: 500
};

ajv.validate(addAuthorRequestSchema, validAuthorData); //  <1>
// → true

var invalidAuthorData = {
  firstName: "Isaac",
  lastNam: "Asimov",
  books: "five hundred"
};

ajv.validate(addAuthorRequestSchema, invalidAuthorData); // <2>
// → false
