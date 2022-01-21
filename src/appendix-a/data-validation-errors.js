var invalidAuthorData = {
  firstName: "Isaac",
  lastNam: "Asimov",
  books: "five hundred"
};

var ajv = new Ajv({allErrors: true}); // <1>
ajv.validate(addAuthorRequestSchema, invalidAuthorData);
ajv.errorsText(ajv.errors); // <2> 
// → "data should have required property 'lastName', data.books should be number"
