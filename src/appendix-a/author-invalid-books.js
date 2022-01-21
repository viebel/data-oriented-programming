var authorDataInvalidBooks = {
  "firstName": "Albert",
  "lastName": "Einstein",
  "books": "Five"
};

validate(authorSchema, authorDataInvalidBooks); // <1>
// → false 
