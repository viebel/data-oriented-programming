var authorDataNoBooks = {
  "firstName": "Yehonathan",
  "lastName": "Sharvit"
};

ajv.validate(authorSchema, authorDataNoBooks); // <1>
// → true 
